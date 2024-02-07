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

@Resolver()
@UseGuards(GqlAuthGuard)
export class CountsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => CountDto)
  async adminCount(
    @Args({ name: 'where', defaultValue: {} }) where: AdminWhereInput,

  ) {
    const counts = await this.prismaService.admins.count({where});
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async agentsCount(
    @Args({ name: 'where', defaultValue: {} }) where: AgentWhereInput,

  ) {
    const counts = await this.prismaService.agents.count({where});
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async adminLoginCount(
    @Args({ name: 'where', defaultValue: {} }) where: AdminLoginLogWhereInput,

  ) {
    const counts = await this.prismaService.admin_login_logs.count({where});
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersCount(
    @Args({ name: 'where', defaultValue: {} }) where: PlayerWhereInput,

  ) {
    const counts = await this.prismaService.players.count({where});
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersLoginCount(
    @Args({ name: 'where', defaultValue: {} }) where: PlayerLoginLogWhereInput,

  ) {
    const counts = await this.prismaService.player_login_logs.count({where});
    return {
      counts,
    };
  }
  

  @Query(() => CountDto)
  async manualAdjustmentCount(
    @Args({ name: 'where', defaultValue: {} }) where: ManualAdjustmentWhereInput,
  ) {
    const counts = await this.prismaService.manual_adjustments.count({where});
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async adminRolesCount(
    @Args({ name: 'where', defaultValue: {} }) where: AdminRoleWhereInput,

  ) {
    const counts = await this.prismaService.admin_roles.count({where});
    return {
      counts,
    };
  }


  @Query(() => CountDto)
  async depositsCount(
    @Args({ name: 'where', defaultValue: {} })
    where: DepositTransactionWhereInput,
  ) {
    const counts = await this.prismaService.deposit_transactions.count({where});
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async withdrawalCount(
    @Args({ name: 'where', defaultValue: {} })
    where: WithdrawalTransactionWhereInput,
  ) {
    const counts = await this.prismaService.withdrawal_transactions.count({where});
    return {
      counts,
    };
  }


  @Query(() => CountDto)
  async bankAccountCount(
    @Args({ name: 'where', defaultValue: {} })
    where: AdminBankAccountWhereInput,
  ) {
    const counts = await this.prismaService.admin_bank_accounts.count({where});
    return {
      counts,
    };
  }
  
  @Query(() => CountDto)
  async usersGameHistoryCount(
    @Args({ name: 'where', defaultValue: {} })
    where: game_record_roundsWhereInput,
  ) {
    const counts = await this.prismaService.game_record_rounds.count({where});
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async usersBonusHistoryCount(
    @Args({ name: 'where', defaultValue: {} })
    where: rebate_transactionsWhereInput,
  ) {
    const counts = await this.prismaService.rebate_transactions.count({where});
    return {
      counts,
    };
  }
}
