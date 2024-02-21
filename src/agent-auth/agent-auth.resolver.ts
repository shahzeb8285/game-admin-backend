// agent-auth.resolver.ts
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AgentAuthService } from './agent-auth.service';
// import { agents as Agent } from '../@generated/agents/agents.model';
import { Query, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Token } from 'src/auth/models/token.model';
import { agents as Agent } from 'src/@generated/agents/agents.model';

@Resolver('AgentAuth')
@UseGuards(GqlAuthGuard)
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
}
