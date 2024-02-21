// agent-auth.resolver.ts
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AgentAuthService } from './agent-auth.service';
// import { agents as Agent } from '../@generated/agents/agents.model';
import { Token } from 'src/auth/models/token.model';

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
}
