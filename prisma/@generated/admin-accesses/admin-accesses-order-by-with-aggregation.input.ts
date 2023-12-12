import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { admin_accessesCountOrderByAggregateInput } from './admin-accesses-count-order-by-aggregate.input';
import { admin_accessesMaxOrderByAggregateInput } from './admin-accesses-max-order-by-aggregate.input';
import { admin_accessesMinOrderByAggregateInput } from './admin-accesses-min-order-by-aggregate.input';

@InputType()
export class admin_accessesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    access_name?: keyof typeof SortOrder;

    @Field(() => admin_accessesCountOrderByAggregateInput, {nullable:true})
    _count?: admin_accessesCountOrderByAggregateInput;

    @Field(() => admin_accessesMaxOrderByAggregateInput, {nullable:true})
    _max?: admin_accessesMaxOrderByAggregateInput;

    @Field(() => admin_accessesMinOrderByAggregateInput, {nullable:true})
    _min?: admin_accessesMinOrderByAggregateInput;
}
