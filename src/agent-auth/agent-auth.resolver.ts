// agent-auth.resolver.ts
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AgentAuthService } from './agent-auth.service';
import { agents as Agent } from '../@generated/agents/agents.model';
import { UseGuards } from '@nestjs/common';
import { Token } from 'src/auth/models/token.model';
import { UserEntity } from 'src/common/decorators/user.decorator';
// import { GqlAuthGuard } from './gql-auth.guard';
import { agentsOrderByWithAggregationInput } from 'src/@generated/agents/agents-order-by-with-aggregation.input';
import { agentsWhereInput as AgentWhereInput } from '../@generated/agents/agents-where.input';
import { players as Player } from '../@generated/players/players.model';
import { playersOrderByWithAggregationInput } from '../@generated/players/players-order-by-with-aggregation.input';
import { playersWhereInput as PlayerWhereInput } from '../@generated/players/players-where.input';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver('AgentAuth')
export class AgentAuthResolver {
  constructor(private readonly agentAuthService: AgentAuthService) {}

  @Mutation(() => Token)
  async agentLogin(
    @Args('agentName') agentName: string,
    @Args('password') password: string,
  ) {
    const { access_token, refresh_token } =
      await this.agentAuthService.agentLogin(agentName, password);

    return {
      access_token,
      refresh_token,
    };
  }

  @Query(() => [Agent])
  @UseGuards(GqlAuthGuard)
  getMyAgents(
    @UserEntity() user,
    @Args({ name: 'where', defaultValue: {} }) where: AgentWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: agentsOrderByWithAggregationInput,
  ) {
    return this.agentAuthService.findAllMyAgents({
      skip,
      take,
      where,
      orderBy,
      user,
    });
  }

  @Query(() => [Player])
  @UseGuards(GqlAuthGuard)
  getMyPlayers(
    @UserEntity() user,
    @Args({ name: 'where', defaultValue: {} }) where: PlayerWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: playersOrderByWithAggregationInput,
  ) {
    return this.agentAuthService.findAllMyPlayers({
      skip,
      take,
      where,
      orderBy,
      user,
    });
  }

  @Query(() => Agent)
  @UseGuards(GqlAuthGuard)
  async getAgentMe(@UserEntity() user) {
    return user;
  }
}
