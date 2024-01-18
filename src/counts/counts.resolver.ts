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
    const counts = await this.prismaService.admin.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async agentsCount() {
    const counts = await this.prismaService.agent.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async adminLoginCount() {
    const counts = await this.prismaService.adminLoginLog.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersCount() {
    const counts = await this.prismaService.player.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async usersLoginCount() {
    const counts = await this.prismaService.playerLoginLog.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async manualAdjustmentCount() {
    const counts = await this.prismaService.manualAdjustment.count();
    return {
      counts,
    };
  }

  @Query(() => CountDto)
  async adminRolesCount() {
    const counts = await this.prismaService.adminRole.count();
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async depositsCount() {
    const counts = await this.prismaService.depositTransaction.count();
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async withdrawalCount() {
    const counts = await this.prismaService.withdrawalTransaction.count();
    return {
      counts,
    };
  }
  @Query(() => CountDto)
  async bankAccountCount() {
    const counts = await this.prismaService.adminBankAccount.count();
    return {
      counts,
    };
  }
}
