import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { exchange_ratesCountOrderByAggregateInput } from './exchange-rates-count-order-by-aggregate.input';
import { exchange_ratesAvgOrderByAggregateInput } from './exchange-rates-avg-order-by-aggregate.input';
import { exchange_ratesMaxOrderByAggregateInput } from './exchange-rates-max-order-by-aggregate.input';
import { exchange_ratesMinOrderByAggregateInput } from './exchange-rates-min-order-by-aggregate.input';
import { exchange_ratesSumOrderByAggregateInput } from './exchange-rates-sum-order-by-aggregate.input';

@InputType()
export class exchange_ratesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    exchange_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    real_currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_per_real?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => exchange_ratesCountOrderByAggregateInput, {nullable:true})
    _count?: exchange_ratesCountOrderByAggregateInput;

    @Field(() => exchange_ratesAvgOrderByAggregateInput, {nullable:true})
    _avg?: exchange_ratesAvgOrderByAggregateInput;

    @Field(() => exchange_ratesMaxOrderByAggregateInput, {nullable:true})
    _max?: exchange_ratesMaxOrderByAggregateInput;

    @Field(() => exchange_ratesMinOrderByAggregateInput, {nullable:true})
    _min?: exchange_ratesMinOrderByAggregateInput;

    @Field(() => exchange_ratesSumOrderByAggregateInput, {nullable:true})
    _sum?: exchange_ratesSumOrderByAggregateInput;
}
