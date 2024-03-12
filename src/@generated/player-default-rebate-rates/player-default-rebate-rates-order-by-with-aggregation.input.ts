import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { player_default_rebate_ratesCountOrderByAggregateInput } from './player-default-rebate-rates-count-order-by-aggregate.input';
import { player_default_rebate_ratesAvgOrderByAggregateInput } from './player-default-rebate-rates-avg-order-by-aggregate.input';
import { player_default_rebate_ratesMaxOrderByAggregateInput } from './player-default-rebate-rates-max-order-by-aggregate.input';
import { player_default_rebate_ratesMinOrderByAggregateInput } from './player-default-rebate-rates-min-order-by-aggregate.input';
import { player_default_rebate_ratesSumOrderByAggregateInput } from './player-default-rebate-rates-sum-order-by-aggregate.input';

@InputType()
export class player_default_rebate_ratesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_default_rebate_rate_id?: keyof typeof SortOrder;

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

    @Field(() => player_default_rebate_ratesCountOrderByAggregateInput, {nullable:true})
    _count?: player_default_rebate_ratesCountOrderByAggregateInput;

    @Field(() => player_default_rebate_ratesAvgOrderByAggregateInput, {nullable:true})
    _avg?: player_default_rebate_ratesAvgOrderByAggregateInput;

    @Field(() => player_default_rebate_ratesMaxOrderByAggregateInput, {nullable:true})
    _max?: player_default_rebate_ratesMaxOrderByAggregateInput;

    @Field(() => player_default_rebate_ratesMinOrderByAggregateInput, {nullable:true})
    _min?: player_default_rebate_ratesMinOrderByAggregateInput;

    @Field(() => player_default_rebate_ratesSumOrderByAggregateInput, {nullable:true})
    _sum?: player_default_rebate_ratesSumOrderByAggregateInput;
}
