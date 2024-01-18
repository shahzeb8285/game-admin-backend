import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AgentsService } from './agents.service';
// import { Agent } from './entities/agent.entity';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UserEntity } from '../common/decorators/user.decorator';
import { Admin } from '../@generated/admin/admin.model';
import { Agent } from '../@generated/agent/agent.model';
// import { Admin } from '../admins/entities/admin.entity';

@Resolver(() => Agent)
@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class AgentsResolver {
  constructor(private readonly agentsService: AgentsService) {}


  @Mutation(() => Agent)
  createAgent(@UserEntity() user: Admin,@Args('data') createAgentInput: CreateAgentInput) {
    return this.agentsService.create(user.admin_id,createAgentInput);
  }

  @Query(() => [Agent], { name: 'agents' })
  getAgents( @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
  @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number) {
    return this.agentsService.findAll({skip,take});
  }

  
  @Mutation(() => Agent)
  updateAgent(@Args('data') updateAgentInput: UpdateAgentInput) {
    return this.agentsService.update(updateAgentInput.agent_id.toString(), updateAgentInput);
  }



}
