import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PlayerOrderByRelationAggregateInput } from '../player/player-order-by-relation-aggregate.input';
import { AgentRebateOrderByRelationAggregateInput } from '../agent-rebate/agent-rebate-order-by-relation-aggregate.input';
import { AgentOrderByRelationAggregateInput } from './agent-order-by-relation-aggregate.input';

@InputType()
export class AgentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parent_agent_id?: SortOrderInput;

    @Field(() => PlayerOrderByRelationAggregateInput, {nullable:true})
    players?: PlayerOrderByRelationAggregateInput;

    @Field(() => AgentRebateOrderByRelationAggregateInput, {nullable:true})
    agent_rebates?: AgentRebateOrderByRelationAggregateInput;

    @Field(() => AgentOrderByWithRelationInput, {nullable:true})
    parent?: AgentOrderByWithRelationInput;

    @Field(() => AgentOrderByRelationAggregateInput, {nullable:true})
    children?: AgentOrderByRelationAggregateInput;
}
