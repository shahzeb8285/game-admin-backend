import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { bank_method } from 'src/@generated/prisma/bank-method.enum';
import { wallet_transaction_status } from 'src/@generated/prisma/wallet-transaction-status.enum';
import {
  CreateBankAccountInput,
  UpdateBankAccountInput,
} from './dto/create-finance.input';
import { UpdateFinanceInput } from './dto/update-finance.input';
import { UpdateGameRebateInput } from './dto/update-game-rebate.input';
import { FinancialStatementEntity } from './entities/financialstatement.entity';
import { FinancialStatementWhereInput } from './dto/financialstatement-where.input';
import { IncomeStatementWhereInput } from './dto/income-statement.where.input';

@Injectable()
export class FinancesService {
  constructor(private readonly prisma: PrismaService) {}

  createBankAccount(data: CreateBankAccountInput) {
    return this.prisma.admin_bank_accounts.create({
      data: {
        ...data,
        method: bank_method[data.method],
      },
    });
  }

  updateBankAccount(data: UpdateBankAccountInput) {
    const payload: any = {
      ...data,
    };
    delete payload.adminBankAccountID;
    return this.prisma.admin_bank_accounts.update({
      where: {
        admin_bank_account_id: data.admin_bank_account_id,
      },
      data: {
        ...payload,
      },
    });
  }

  async updateAgentGameRebates(input: UpdateGameRebateInput, adminId: string) {
    const agent = await this.prisma.agents.findFirst({
      where: { agent_id: input.id },
      select: {
        parent_agent_id: true,
      },
    });

    for (const rebate of input.rabates) {
      const parentRebate = await this.prisma.agent_rebate_rates.findFirst({
        where: {
          agent_id: agent.parent_agent_id,
          rebate_category_id: rebate.categoryId,
        },
        select: {
          rebate: true,
        },
      });

      if (parentRebate.rebate < rebate.newRate) {
        throw new BadRequestException(
          `Cant Set higher rebate than parent in ${rebate.categoryId}`,
        );
      }

      await this.prisma.agent_rebate_rates.updateMany({
        where: {
          agent_id: input.id,
          rebate_category_id: rebate.categoryId,
        },
        data: {
          is_active: false,
        },
      });

      await this.prisma.agent_rebate_rates.create({
        data: {
          agent_id: input.id,
          rebate_category_id: rebate.categoryId,
          rebate: rebate.newRate,
          is_active: true,
          created_by: adminId,
        },
      });
    }
    return { message: 'OK' };
  }

  async updatePlayerGameRebates(input: UpdateGameRebateInput, adminId: string) {
    const player = await this.prisma.players.findFirst({
      where: { player_id: input.id },
      select: {
        agent_id: true,
        player_id: true,
      },
    });

    for (const rebate of input.rabates) {
      const parentRebate = await this.prisma.player_rebate_rates.findFirst({
        where: {
          player_id: player.player_id,
          rebate_category_id: rebate.categoryId,
        },
        select: {
          rebate: true,
        },
      });

      if (parentRebate.rebate < rebate.newRate) {
        throw new BadRequestException(
          `Cant Set higher rebate than parent in ${rebate.categoryId}`,
        );
      }

      await this.prisma.player_rebate_rates.update({
        where: {
          player_rebate_rate_id: rebate.previousRebateId,
        },
        data: {
          is_active: false,
        },
      });

      await this.prisma.player_rebate_rates.create({
        data: {
          player_id: input.id,
          rebate_category_id: rebate.categoryId,
          rebate: rebate.newRate,
          is_active: true,
          created_by: adminId,
        },
      });
    }
    return { message: 'OK' };
  }

  getDeposits({ skip, take, where, orderBy }) {
    return this.prisma.deposit_transactions.findMany({
      skip,
      orderBy,
      take,
      where,
      include: {
        processed_by_admin: {
          select: {
            admin_name: true,
          },
        },
        players: {
          include: {
            agent: true,
          },
        },

        // players: true,
        admin_bank_account: true,
      },
    });
  }

  async getIncomeStatementByParent(input: IncomeStatementWhereInput) {
    const fromDate = input.fromDate;
    const toDate = input.toDate;
    const parentId = input.parentId;

    const agentQuery = ` select a.agent_id, a.agent_name, a.parent_agent_id, sum(effective_bet_amount) as "effective_bet", sum(rebate_income) as "rebate_income", sum(rebate_expense) as "rebate_expense", 
    sum(game_pnl_income) as "pnl", sum(game_pnl_expense) as "pnl_expense", 
    sum(rebate_income) - sum(rebate_expense) - sum(game_pnl_income) + sum(game_pnl_expense) as "net_income"
    from agent_records_by_day arbd 
      join agents a on a.agent_id = arbd.agent_id and a.enabled = true
      where arbd.game_date BETWEEN '${fromDate}' AND '${toDate}' AND a.parent_agent_id = '${parentId}'
      group by a.agent_id ;`;

    const playerQuery = ` select p.player_id, p.name, p.agent_id , sum(effective_bet_amount) as "effective_bet", sum(pnl) as "pnl", sum(rebate_amount) as "rebate"
    from game_records_by_day grbd 
    join players p on p.player_id = grbd.player_id and p.enabled = true
    where game_date BETWEEN '${fromDate}' AND '${toDate}'
    AND p.agent_id = '${parentId}'
    group by p.player_id 
    ; `;

    const agentResponse = await this.prisma.$queryRawUnsafe(agentQuery);
    const playerResponse = await this.prisma.$queryRawUnsafe(playerQuery);

    return {
      agents: agentResponse,
      players: playerResponse,
    };
  }

  async getFinancialStatement(where: FinancialStatementWhereInput) {
    const fromDate = where.fromDate;
    const toDate = where.toDate;
    const agentName = where.agentName;
    const playerName = where.playerName;

    const agentWhereQuery = agentName
      ? `AND  LOWER(a.agent_name) LIKE '%${agentName.toLowerCase()}%' `
      : '';

    const playerWhereQuery = playerName
      ? `AND  LOWER(p.tg_id) LIKE '%${playerName.toLowerCase()}%' `
      : '';

    const q1 = `WITH combined_transactions AS (
      SELECT 
        dt.player_id, 
        dt.game_amount
      FROM 
        deposit_transactions dt 
      WHERE 
        dt.status = 'SUCCESS' 
        AND dt.trans_date BETWEEN '${fromDate}' AND '${toDate}'
      
      UNION ALL
      
      SELECT 
        tit.player_id, 
        tit.game_amount
      FROM 
        transfer_in_transactions tit 
      WHERE 
        tit.status = 'SUCCESS' 
        AND tit.trans_date BETWEEN '${fromDate}' AND '${toDate}'
    )
    
    SELECT 
      p.player_id, 
      p.tg_id,
      a.agent_name,
      COUNT(*) AS deposit_number, 
      SUM(game_amount) AS deposit_amount
    FROM combined_transactions ct
    JOIN players p ON p.player_id = ct.player_id AND p.enabled = TRUE
    LEFT JOIN agents a ON p.agent_id = a.agent_id AND a.enabled = TRUE
    WHERE 1=1 ${playerWhereQuery} ${agentWhereQuery}

    GROUP BY p.player_id, p.tg_id, a.agent_name
    ;


    `;

    const q2 = `with combined_transactions as (
    SELECT 
      wt.player_id, 
      wt.game_amount
    FROM 
      withdrawal_transactions wt 
    WHERE 
      wt.status = 'SUCCESS' 
      AND wt.trans_date BETWEEN '${fromDate}' AND '${toDate}'
    
    UNION ALL
    
    SELECT 
      tit.player_id, 
      tit.game_amount
    FROM 
      transfer_out_transactions tit 
    WHERE 
      tit.status = 'SUCCESS' 
      AND tit.trans_date BETWEEN '${fromDate}' AND '${toDate}'
      )
  SELECT 
    p.player_id, 
    COUNT(*) AS withdrawal_number, 
    SUM(game_amount) AS withdrawal_amount
  FROM combined_transactions ct
  join players p on p.player_id = ct.player_id and p.enabled = true
  left join agents a on p.agent_id = a.agent_id and a.enabled = true
  WHERE 1=1 ${playerWhereQuery} ${agentWhereQuery} 

  GROUP BY p.player_id, a.agent_name;

  `;

    const q3 = `select p.player_id, sum(pnl)
    from game_records_by_period grbp
    join players p on p.player_id = grbp.player_id and p.enabled = true
    left join agents a on p.agent_id = a.agent_id and a.enabled = true
    where grbp.game_date BETWEEN '${fromDate}' AND '${toDate}' 
     ${playerWhereQuery} ${agentWhereQuery}

    group by p.player_id, a.agent_name
    ;

    `;

    const q1Resp = await this.prisma.$queryRawUnsafe(q1);

    const q2Resp = await this.prisma.$queryRawUnsafe(q2);
    const q3Resp = await this.prisma.$queryRawUnsafe(q3);

    const response = {
      deposits: q1Resp,
      withdrawals: q2Resp,
      pnl: q3Resp,
    };

    const replacer = (key, value) =>
      typeof value === 'bigint' ? value.toString() : value;
    const finalResp = JSON.parse(JSON.stringify(response, replacer));
    return finalResp;
  }
  async getAgentGameRebate(agentId: string) {
    const agent = await this.prisma.agents.findFirst({
      where: { agent_id: agentId },
      select: {
        agent_id: true,
        agent_name: true,

        parent: {
          select: {
            agent_name: true,
            agent_id: true,
          },
        },
      },
    });

    if (!agent) {
      throw new NotFoundException('Agent not found');
    }

    const categories = await this.prisma.fl_categories.findMany();

    const currentAgentRebateRates =
      await this.prisma.agent_rebate_rates.findMany({
        where: {
          agent_id: agent.agent_id,
        },
      });

    const parentAgentRebateRates =
      await this.prisma.agent_rebate_rates.findMany({
        where: {
          agent_id: agent.parent.agent_id,
        },
      });
    const defaultPlayerRebateRates =
      await this.prisma.player_default_rebate_rates.findMany({
        where: {
          agent_id: agent.parent.agent_id,
        },
      });

    return {
      agent,
      categories,
      agentRebates: currentAgentRebateRates,
      parentRebates: parentAgentRebateRates,
      defaultPlayerRebates: defaultPlayerRebateRates,
    };
  }

  async getPlayerGameRebate(playerId: string) {
    const player = await this.prisma.players.findFirst({
      where: { player_id: playerId },
      select: {
        agent_id: true,
        player_id: true,
        tg_id: true,
        name: true,
        agent: {
          select: {
            agent_name: true,
            agent_id: true,
          },
        },
      },
    });

    if (!player) {
      throw new NotFoundException('Player not found');
    }

    const categories = await this.prisma.fl_categories.findMany();

    const currentPlayerRebateRates =
      await this.prisma.player_rebate_rates.findMany({
        where: {
          player_id: playerId,
        },
      });

    const parentAgentRebateRates =
      await this.prisma.agent_rebate_rates.findMany({
        where: {
          agent_id: player.agent_id,
        },
      });

    return {
      player,
      categories,
      player_rebate: currentPlayerRebateRates,
      parentRebates: parentAgentRebateRates,
    };
  }

  getTransferIn({ skip, take, where, orderBy }) {
    return this.prisma.transfer_in_transactions.findMany({
      skip,
      orderBy,
      take,
      where,
      include: {
        player: true,
        processed_by_admin: {
          select: {
            admin_name: true,
          },
        },
      },
    });
  }

  getTransferOut({ skip, take, where, orderBy }) {
    return this.prisma.transfer_out_transactions.findMany({
      skip,
      orderBy,
      take,
      where,
      include: {
        player: true,
        processed_by_admin: {
          select: {
            admin_name: true,
          },
        },
      },
    });
  }

  getBanks() {
    return this.prisma.banks.findMany();
  }

  getBankAccounts({ skip, take, where, orderBy }) {
    return this.prisma.admin_bank_accounts.findMany({
      skip,
      take,
      where,
      orderBy,

      include: {
        deposit_transactions: true,

        // withdrawal_transactions: true,
      },
    });
  }

  getWithdrawals({ skip, take, where, orderBy }) {
    return this.prisma.withdrawal_transactions.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        players: {
          include: {
            agent: true,
          },
        },
        processed_by_admin: {
          select: {
            admin_name: true,
          },
        },
        player_bank_account: true,
      },
    });
  }

  updateWithdrawal(data: UpdateFinanceInput) {
    return this.prisma.withdrawal_transactions.update({
      where: {
        withdrawal_transaction_id: data.id,
      },
      data: {
        status: data.is_enabled
          ? wallet_transaction_status.SUCCESS
          : wallet_transaction_status.REJECTED,
      },
      include: {
        players: true,
        player_bank_account: true,
      },
    });
  }

  updateDeposit(data: UpdateFinanceInput) {
    return this.prisma.deposit_transactions.update({
      where: {
        deposit_transaction_id: data.id,
      },
      data: {
        status: data.is_enabled
          ? wallet_transaction_status.SUCCESS
          : wallet_transaction_status.REJECTED,
      },
      include: {
        players: true,
        admin_bank_account: true,
      },
    });
  }
}
