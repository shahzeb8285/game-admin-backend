import { Query, Resolver } from '@nestjs/graphql';
import { CountDto } from 'src/common/models/count.model';
import { PrismaService } from 'nestjs-prisma';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
@UseGuards(GqlAuthGuard)

export class CountsResolver {
  constructor(
    private readonly prismaService: PrismaService

  ) { }


  @Query(() => CountDto)
  async adminCount() {
    const counts = await this.prismaService.admin.count()
    return {
      counts
    }
  }

}
