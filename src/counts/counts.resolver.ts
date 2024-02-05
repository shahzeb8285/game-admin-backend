import { Query, Resolver } from '@nestjs/graphql';
import { CountDto } from 'src/common/models/count.model';
import { PrismaService } from 'nestjs-prisma';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
@UseGuards(GqlAuthGuard)
export class CountsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => CountDto)
  async adminCount() {
    const counts = await this.prismaService.admins.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async agentsCount() {
    const counts = await this.prismaService.agents.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async adminLoginCount() {
    const counts = await this.prismaService.admin_login_logs.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersCount() {
    const counts = await this.prismaService.players.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersLoginCount() {
    const counts = await this.prismaService.player_login_logs.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async manualAdjustmentCount() {
    const counts = await this.prismaService.manual_adjustments.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async adminRolesCount() {
    const counts = await this.prismaService.admin_roles.count();
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async depositsCount() {
    const counts = await this.prismaService.deposit_transactions.count();
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async withdrawalCount() {
    const counts = await this.prismaService.withdrawal_transactions.count();
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async bankAccountCount() {
    const counts = await this.prismaService.admin_bank_accounts.count();
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async usersGameHistoryCount() {
    const counts = await this.prismaService.game_record_rounds.count();
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async usersBonusHistoryCount() {
    const counts = await this.prismaService.rebate_transactions.count();
    return {
      counts,
    };
  }
}
