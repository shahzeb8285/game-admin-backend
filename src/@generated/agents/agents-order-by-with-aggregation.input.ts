import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { agentsCountOrderByAggregateInput } from './agents-count-order-by-aggregate.input';
import { agentsMaxOrderByAggregateInput } from './agents-max-order-by-aggregate.input';
import { agentsMinOrderByAggregateInput } from './agents-min-order-by-aggregate.input';

@InputType()
export class agentsOrderByWithAggregationInput {

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

    @Field(() => agentsCountOrderByAggregateInput, {nullable:true})
    _count?: agentsCountOrderByAggregateInput;

    @Field(() => agentsMaxOrderByAggregateInput, {nullable:true})
    _max?: agentsMaxOrderByAggregateInput;

    @Field(() => agentsMinOrderByAggregateInput, {nullable:true})
    _min?: agentsMinOrderByAggregateInput;
}
