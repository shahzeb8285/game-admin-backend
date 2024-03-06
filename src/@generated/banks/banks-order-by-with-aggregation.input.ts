import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { banksCountOrderByAggregateInput } from './banks-count-order-by-aggregate.input';
import { banksMaxOrderByAggregateInput } from './banks-max-order-by-aggregate.input';
import { banksMinOrderByAggregateInput } from './banks-min-order-by-aggregate.input';

@InputType()
export class banksOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    bank_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank_code?: keyof typeof SortOrder;

    @Field(() => banksCountOrderByAggregateInput, {nullable:true})
    _count?: banksCountOrderByAggregateInput;

    @Field(() => banksMaxOrderByAggregateInput, {nullable:true})
    _max?: banksMaxOrderByAggregateInput;

    @Field(() => banksMinOrderByAggregateInput, {nullable:true})
    _min?: banksMinOrderByAggregateInput;
}
