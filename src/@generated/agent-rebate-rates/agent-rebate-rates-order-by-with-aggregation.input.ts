import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { agent_rebate_ratesCountOrderByAggregateInput } from './agent-rebate-rates-count-order-by-aggregate.input';
import { agent_rebate_ratesAvgOrderByAggregateInput } from './agent-rebate-rates-avg-order-by-aggregate.input';
import { agent_rebate_ratesMaxOrderByAggregateInput } from './agent-rebate-rates-max-order-by-aggregate.input';
import { agent_rebate_ratesMinOrderByAggregateInput } from './agent-rebate-rates-min-order-by-aggregate.input';
import { agent_rebate_ratesSumOrderByAggregateInput } from './agent-rebate-rates-sum-order-by-aggregate.input';

@InputType()
export class agent_rebate_ratesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_rebate_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_active?: keyof typeof SortOrder;

    @Field(() => agent_rebate_ratesCountOrderByAggregateInput, {nullable:true})
    _count?: agent_rebate_ratesCountOrderByAggregateInput;

    @Field(() => agent_rebate_ratesAvgOrderByAggregateInput, {nullable:true})
    _avg?: agent_rebate_ratesAvgOrderByAggregateInput;

    @Field(() => agent_rebate_ratesMaxOrderByAggregateInput, {nullable:true})
    _max?: agent_rebate_ratesMaxOrderByAggregateInput;

    @Field(() => agent_rebate_ratesMinOrderByAggregateInput, {nullable:true})
    _min?: agent_rebate_ratesMinOrderByAggregateInput;

    @Field(() => agent_rebate_ratesSumOrderByAggregateInput, {nullable:true})
    _sum?: agent_rebate_ratesSumOrderByAggregateInput;
}
