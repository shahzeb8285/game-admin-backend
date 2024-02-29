import { Args, Query, Resolver } from '@nestjs/graphql';
import { CountDto } from 'src/common/models/count.model';
import { PrismaService } from 'nestjs-prisma';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { agentsWhereInput as AgentWhereInput } from '../@generated/agents/agents-where.input';
import { adminsWhereInput as AdminWhereInput } from '../@generated/admins/admins-where.input';
import { admin_login_logsWhereInput as AdminLoginLogWhereInput } from '../@generated/admin-login-logs/admin-login-logs-where.input';
import { playersWhereInput as PlayerWhereInput } from 'src/@generated/players/players-where.input';
import { player_login_logsWhereInput as PlayerLoginLogWhereInput } from 'src/@generated/player-login-logs/player-login-logs-where.input';
import { manual_adjustmentsWhereInput as ManualAdjustmentWhereInput } from 'src/@generated/manual-adjustments/manual-adjustments-where.input';
import { admin_rolesWhereInput as AdminRoleWhereInput } from '../@generated/admin-roles/admin-roles-where.input';
import { deposit_transactionsWhereInput as DepositTransactionWhereInput } from '../@generated/deposit-transactions/deposit-transactions-where.input';
import { withdrawal_transactionsWhereInput as WithdrawalTransactionWhereInput } from '../@generated/withdrawal-transactions/withdrawal-transactions-where.input';
import { admin_bank_accountsWhereInput as AdminBankAccountWhereInput } from '../@generated/admin-bank-accounts/admin-bank-accounts-where.input';
import { rebate_transactionsWhereInput } from 'src/@generated/rebate-transactions/rebate-transactions-where.input';
import { game_record_roundsWhereInput } from 'src/@generated/game-record-rounds/game-record-rounds-where.input';
import { GameRecordRoundsWhereInput } from 'src/players/entities/game-record-rounds-where.input';
import moment from 'moment';
import { transfer_out_transactionsWhereInput } from 'src/@generated/transfer-out-transactions/transfer-out-transactions-where.input';
import { transfer_in_transactionsWhereInput } from 'src/@generated/transfer-in-transactions/transfer-in-transactions-where.input';
import { GetAgentShareInput } from 'src/agents/dto/get-agentshare.input';

@Resolver()
@UseGuards(GqlAuthGuard)
export class CountsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => CountDto)
  async adminCount(
    @Args({ name: 'where', defaultValue: {} }) where: AdminWhereInput,
  ) {
    const counts = await this.prismaService.admins.count({ where });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async agentsCount(
    @Args({ name: 'where', defaultValue: {} }) where: AgentWhereInput,
  ) {
    const counts = await this.prismaService.agents.count({ where });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async adminLoginCount(
    @Args({ name: 'where', defaultValue: {} }) where: AdminLoginLogWhereInput,
  ) {
    const counts = await this.prismaService.admin_login_logs.count({ where });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersCount(
    @Args({ name: 'where', defaultValue: {} }) where: PlayerWhereInput,
  ) {
    const counts = await this.prismaService.players.count({ where });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersLoginCount(
    @Args({ name: 'where', defaultValue: {} }) where: PlayerLoginLogWhereInput,
  ) {
    const counts = await this.prismaService.player_login_logs.count({ where });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async manualAdjustmentCount(
    @Args({ name: 'where', defaultValue: {} })
    where: ManualAdjustmentWhereInput,
  ) {
    const counts = await this.prismaService.manual_adjustments.count({ where });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async adminRolesCount(
    @Args({ name: 'where', defaultValue: {} }) where: AdminRoleWhereInput,
  ) {
    const counts = await this.prismaService.admin_roles.count({ where });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async depositsCount(
    @Args({ name: 'where', defaultValue: {} })
    where: DepositTransactionWhereInput,
  ) {
    const counts = await this.prismaService.deposit_transactions.count({
      where,
    });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async withdrawalCount(
    @Args({ name: 'where', defaultValue: {} })
    where: WithdrawalTransactionWhereInput,
  ) {
    const counts = await this.prismaService.withdrawal_transactions.count({
      where,
    });
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async transferOutCount(
    @Args({ name: 'where', defaultValue: {} })
    where: transfer_out_transactionsWhereInput,
  ) {
    const counts = await this.prismaService.transfer_out_transactions.count({
      where,
    });
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async transferInCount(
    @Args({ name: 'where', defaultValue: {} })
    where: transfer_in_transactionsWhereInput,
  ) {
    const counts = await this.prismaService.transfer_in_transactions.count({
      where,
    });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async bankAccountCount(
    @Args({ name: 'where', defaultValue: {} })
    where: AdminBankAccountWhereInput,
  ) {
    const counts = await this.prismaService.admin_bank_accounts.count({
      where,
    });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersGameHistoryCount(
    @Args({ name: 'where', defaultValue: {} })
    where: GameRecordRoundsWhereInput,
  ) {
    const whereQueryInput: GameRecordRoundsWhereInput = where;

    let whereQuery = '';
    if (whereQueryInput) {
      whereQuery = '';
      if (whereQueryInput.tg_id) {
        whereQuery += ` AND LOWER(pl.tg_id) LIKE '%${whereQueryInput.tg_id.toLowerCase()}%'`;
      }
      if (whereQueryInput.game_round_info_id) {
        whereQuery += ` AND LOWER(grr.game_round_info_id) LIKE '%${whereQueryInput.game_round_info_id.toLowerCase()}%'`;
      }
      if (whereQueryInput.merchant_name) {
        whereQuery += ` AND LOWER(sm.merchant_name) LIKE '%${whereQueryInput.merchant_name.toLowerCase()}%'`;
      }
      if (whereQueryInput.game_category) {
        whereQuery += ` AND LOWER(fc.category_name) LIKE '%${whereQueryInput.game_category.toLowerCase()}%'`;
      }

      if (whereQueryInput.game_name) {
        whereQuery += ` AND LOWER(sg.game_name) LIKE '%${whereQueryInput.game_name.toLowerCase()}%'`;
      }

      if (whereQueryInput.cdate) {
        if (whereQueryInput.cdate.gte) {
          const timestamp = moment(whereQueryInput.cdate.gte)
            .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND gri.cdate >= '${timestamp}'`;
          //from
        }

        if (whereQueryInput.cdate.lte) {
          //to
          const timestamp = moment(whereQueryInput.cdate.lte)
            .set({ hour: 23, minute: 59, second: 59 })
            .format('YYYY-MM-DD hh:mm:ss a');
          whereQuery += ` AND gri.cdate <= '${timestamp}'`;
        }
      }
    }

    const query1 = `SELECT COUNT(*) AS record_count
    FROM game_record_rounds grr 
    JOIN players pl ON pl.player_id = grr.player_id  
    JOIN sg_games sg ON grr.game_url = sg.url AND sg.enabled = true 
    JOIN sg_merchants sm ON sm.merchant_id = sg.merchant_id AND sm.enabled = true
    JOIN fl_categories fc ON fc.category_id = grr.rebate_category_id AND fc.enabled = true
    JOIN game_round_infos gri ON gri.game_round_info_id = grr.game_round_info_id
    WHERE 1=1 ${whereQuery} ;`;

    const result = await this.prismaService.$queryRawUnsafe(query1);
    return {
      counts: Number(result[0].record_count),
    };
  }

  @Query(() => CountDto)
  async usersBonusHistoryCount(
    @Args({ name: 'where', defaultValue: {} })
    where: rebate_transactionsWhereInput,
  ) {
    const counts = await this.prismaService.rebate_transactions.count({
      where,
    });
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async agentsPlayersCount(
    @Args({ name: 'where', defaultValue: {} })
    where: GetAgentShareInput,
  ) {
    const counts = await this.prismaService.players.count({
      where: {
        agent_id: where.agentId,
      },
    });
    return {
      counts,
    };
  }
}
