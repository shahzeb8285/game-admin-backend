import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateBankAccountInput,
  UpdateBankAccountInput,
} from './dto/create-finance.input';
import { UpdateFinanceInput } from './dto/update-finance.input';
import { PrismaService } from 'nestjs-prisma';
import { bank_method } from 'src/@generated/prisma/bank-method.enum';
import { wallet_transaction_status } from 'src/@generated/prisma/wallet-transaction-status.enum';
import { UpdateGameRebateInput } from './dto/update-game-rebate.input';

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

      await this.prisma.agent_rebate_rates.update({
        where: {
          agent_rebate_rate_id: rebate.previousRebateId,
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
  }




  async updatePlayerGameRebates(input: UpdateGameRebateInput, adminId: string) {
    const player = await this.prisma.players.findFirst({
      where: { player_id: input.id },
      select: {
        agent_id: true,
        player_id:true
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

    return {
      agent,
      categories,
      agentRebates: currentAgentRebateRates,
      parentRebates: parentAgentRebateRates,
    };
  }

  async getPlayerGameRebate(playerId: string) {
    const player = await this.prisma.players.findFirst({
      where: { player_id: playerId },
      select: {
        agent_id: true,
        player_id: true,
        tg_username: true,
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
          : wallet_transaction_status.FAILED,
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
          : wallet_transaction_status.FAILED,
      },
      include: {
        players: true,
        admin_bank_account: true,
      },
    });
  }
}
