import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { agentsOrderByRelationAggregateInput } from './agents-order-by-relation-aggregate.input';
import { playersOrderByRelationAggregateInput } from '../players/players-order-by-relation-aggregate.input';
import { agent_rebate_ratesOrderByRelationAggregateInput } from '../agent-rebate-rates/agent-rebate-rates-order-by-relation-aggregate.input';
import { agent_sharesOrderByRelationAggregateInput } from '../agent-shares/agent-shares-order-by-relation-aggregate.input';
import { agent_records_by_dayOrderByRelationAggregateInput } from '../agent-records-by-day/agent-records-by-day-order-by-relation-aggregate.input';

@InputType()
export class agentsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parent_agent_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => agentsOrderByWithRelationInput, {nullable:true})
    parent?: agentsOrderByWithRelationInput;

    @Field(() => agentsOrderByRelationAggregateInput, {nullable:true})
    children?: agentsOrderByRelationAggregateInput;

    @Field(() => playersOrderByRelationAggregateInput, {nullable:true})
    players?: playersOrderByRelationAggregateInput;

    @Field(() => agent_rebate_ratesOrderByRelationAggregateInput, {nullable:true})
    agent_rebate_rates?: agent_rebate_ratesOrderByRelationAggregateInput;

    @Field(() => agent_sharesOrderByRelationAggregateInput, {nullable:true})
    agent_shares?: agent_sharesOrderByRelationAggregateInput;

    @Field(() => agent_records_by_dayOrderByRelationAggregateInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayOrderByRelationAggregateInput;
}
