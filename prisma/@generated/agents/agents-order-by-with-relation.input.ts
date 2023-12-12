import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { playersOrderByRelationAggregateInput } from '../players/players-order-by-relation-aggregate.input';
import { agent_rebatesOrderByRelationAggregateInput } from '../agent-rebates/agent-rebates-order-by-relation-aggregate.input';
import { agentsOrderByRelationAggregateInput } from './agents-order-by-relation-aggregate.input';

@InputType()
export class agentsOrderByWithRelationInput {

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

    @Field(() => playersOrderByRelationAggregateInput, {nullable:true})
    players?: playersOrderByRelationAggregateInput;

    @Field(() => agent_rebatesOrderByRelationAggregateInput, {nullable:true})
    agent_rebates?: agent_rebatesOrderByRelationAggregateInput;

    @Field(() => agentsOrderByWithRelationInput, {nullable:true})
    parent?: agentsOrderByWithRelationInput;

    @Field(() => agentsOrderByRelationAggregateInput, {nullable:true})
    children?: agentsOrderByRelationAggregateInput;
}
