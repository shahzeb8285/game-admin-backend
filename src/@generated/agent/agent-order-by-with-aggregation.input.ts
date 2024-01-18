import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AgentCountOrderByAggregateInput } from './agent-count-order-by-aggregate.input';
import { AgentMaxOrderByAggregateInput } from './agent-max-order-by-aggregate.input';
import { AgentMinOrderByAggregateInput } from './agent-min-order-by-aggregate.input';

@InputType()
export class AgentOrderByWithAggregationInput {

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

    @Field(() => AgentCountOrderByAggregateInput, {nullable:true})
    _count?: AgentCountOrderByAggregateInput;

    @Field(() => AgentMaxOrderByAggregateInput, {nullable:true})
    _max?: AgentMaxOrderByAggregateInput;

    @Field(() => AgentMinOrderByAggregateInput, {nullable:true})
    _min?: AgentMinOrderByAggregateInput;
}
