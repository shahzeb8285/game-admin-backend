// agent-auth.resolver.ts
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AgentAuthService } from './agent-auth.service';
// import { agents as Agent } from '../@generated/agents/agents.model';
import { UseGuards } from '@nestjs/common';
import { Token } from 'src/auth/models/token.model';
import { agents as Agent, agents } from 'src/@generated/agents/agents.model';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver('AgentAuth')
// @UseGuards(GqlAuthGuard)
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

  // @Query(() => Agent)
  // async getAgent(@Context('user') user) {
  //   const agent = await this.agentAuthService.getAgentById(user.agentId);
  //   return agent;
  // }
  @Query(() => agents)
  @UseGuards(GqlAuthGuard)
  async getAgent(@UserEntity() user) {
    return user;
  }
}
