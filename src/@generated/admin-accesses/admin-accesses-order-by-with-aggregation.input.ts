import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminAccessesCountOrderByAggregateInput } from './admin-accesses-count-order-by-aggregate.input';
import { AdminAccessesMaxOrderByAggregateInput } from './admin-accesses-max-order-by-aggregate.input';
import { AdminAccessesMinOrderByAggregateInput } from './admin-accesses-min-order-by-aggregate.input';

@InputType()
export class AdminAccessesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    access_name?: keyof typeof SortOrder;

    @Field(() => AdminAccessesCountOrderByAggregateInput, {nullable:true})
    _count?: AdminAccessesCountOrderByAggregateInput;

    @Field(() => AdminAccessesMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminAccessesMaxOrderByAggregateInput;

    @Field(() => AdminAccessesMinOrderByAggregateInput, {nullable:true})
    _min?: AdminAccessesMinOrderByAggregateInput;
}
