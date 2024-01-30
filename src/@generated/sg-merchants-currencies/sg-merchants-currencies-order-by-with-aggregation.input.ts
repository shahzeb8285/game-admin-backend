import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { sg_merchants_currenciesCountOrderByAggregateInput } from './sg-merchants-currencies-count-order-by-aggregate.input';
import { sg_merchants_currenciesAvgOrderByAggregateInput } from './sg-merchants-currencies-avg-order-by-aggregate.input';
import { sg_merchants_currenciesMaxOrderByAggregateInput } from './sg-merchants-currencies-max-order-by-aggregate.input';
import { sg_merchants_currenciesMinOrderByAggregateInput } from './sg-merchants-currencies-min-order-by-aggregate.input';
import { sg_merchants_currenciesSumOrderByAggregateInput } from './sg-merchants-currencies-sum-order-by-aggregate.input';

@InputType()
export class sg_merchants_currenciesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sg_merchants_currency_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchants_currency_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currencies?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => sg_merchants_currenciesCountOrderByAggregateInput, {nullable:true})
    _count?: sg_merchants_currenciesCountOrderByAggregateInput;

    @Field(() => sg_merchants_currenciesAvgOrderByAggregateInput, {nullable:true})
    _avg?: sg_merchants_currenciesAvgOrderByAggregateInput;

    @Field(() => sg_merchants_currenciesMaxOrderByAggregateInput, {nullable:true})
    _max?: sg_merchants_currenciesMaxOrderByAggregateInput;

    @Field(() => sg_merchants_currenciesMinOrderByAggregateInput, {nullable:true})
    _min?: sg_merchants_currenciesMinOrderByAggregateInput;

    @Field(() => sg_merchants_currenciesSumOrderByAggregateInput, {nullable:true})
    _sum?: sg_merchants_currenciesSumOrderByAggregateInput;
}
