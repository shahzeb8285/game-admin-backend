import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AgentsService } from './agents.service';
// import { Agent } from './entities/agent.entity';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UserEntity } from '../common/decorators/user.decorator';
import { admins as Admin } from '../@generated/admins/admins.model';
import { agents as Agent } from '../@generated/agents/agents.model';
import { agentsWhereInput as AgentWhereInput } from '../@generated/agents/agents-where.input';
import { agentsOrderByWithAggregationInput } from 'src/@generated/agents/agents-order-by-with-aggregation.input';
import { GetAgentShareInput, UpdateAgentShareInput } from './dto/get-agentshare.input';
import { OkResponse } from 'src/common/models/OkResponse.model';
// import { Admin } from '../admins/entities/admin.entity';

@Resolver(() => Agent)
@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class AgentsResolver {
  constructor(private readonly agentsService: AgentsService) {}

  @Mutation(() => Agent)
  createAgent(
    @UserEntity() user: Admin,
    @Args('data') createAgentInput: CreateAgentInput,
  ) {
    return this.agentsService.create(user.admin_id, createAgentInput);
  }

  @Query(() => [Agent], { name: 'agents' })
  getAgents(
    @Args({ name: 'where', defaultValue: {} }) where: AgentWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: agentsOrderByWithAggregationInput,
  ) {
    return this.agentsService.findAll({ skip, take, where, orderBy });
  }

  @Mutation(() => Agent)
  updateAgent(@Args('data') updateAgentInput: UpdateAgentInput) {
    return this.agentsService.update(
      updateAgentInput.agent_id.toString(),
      updateAgentInput,
    );
  }


  @Query(() => [Agent])
  getAgentShare(
    @Args({ name: 'where', defaultValue: {} }) where: GetAgentShareInput,
  ) {
    return this.agentsService.getAgentShare(where.agentId);
  }


  @Query(() => [OkResponse])
  updateAgentShare(
    @UserEntity() user: Admin,

    @Args('data') input: UpdateAgentShareInput,

  ) {
    return this.agentsService.updateAgentShare(user.admin_id,input);
  }
  
  
}
