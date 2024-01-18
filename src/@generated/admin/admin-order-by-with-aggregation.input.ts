import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminCountOrderByAggregateInput } from './admin-count-order-by-aggregate.input';
import { AdminMaxOrderByAggregateInput } from './admin-max-order-by-aggregate.input';
import { AdminMinOrderByAggregateInput } from './admin-min-order-by-aggregate.input';

@InputType()
export class AdminOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => AdminCountOrderByAggregateInput, {nullable:true})
    _count?: AdminCountOrderByAggregateInput;

    @Field(() => AdminMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminMaxOrderByAggregateInput;

    @Field(() => AdminMinOrderByAggregateInput, {nullable:true})
    _min?: AdminMinOrderByAggregateInput;
}
