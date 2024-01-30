import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { sg_merchantsCountOrderByAggregateInput } from './sg-merchants-count-order-by-aggregate.input';
import { sg_merchantsAvgOrderByAggregateInput } from './sg-merchants-avg-order-by-aggregate.input';
import { sg_merchantsMaxOrderByAggregateInput } from './sg-merchants-max-order-by-aggregate.input';
import { sg_merchantsMinOrderByAggregateInput } from './sg-merchants-min-order-by-aggregate.input';
import { sg_merchantsSumOrderByAggregateInput } from './sg-merchants-sum-order-by-aggregate.input';

@InputType()
export class sg_merchantsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sg_merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_alias?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => sg_merchantsCountOrderByAggregateInput, {nullable:true})
    _count?: sg_merchantsCountOrderByAggregateInput;

    @Field(() => sg_merchantsAvgOrderByAggregateInput, {nullable:true})
    _avg?: sg_merchantsAvgOrderByAggregateInput;

    @Field(() => sg_merchantsMaxOrderByAggregateInput, {nullable:true})
    _max?: sg_merchantsMaxOrderByAggregateInput;

    @Field(() => sg_merchantsMinOrderByAggregateInput, {nullable:true})
    _min?: sg_merchantsMinOrderByAggregateInput;

    @Field(() => sg_merchantsSumOrderByAggregateInput, {nullable:true})
    _sum?: sg_merchantsSumOrderByAggregateInput;
}
