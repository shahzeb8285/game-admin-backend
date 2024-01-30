import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { admin_role_accessesCountOrderByAggregateInput } from './admin-role-accesses-count-order-by-aggregate.input';
import { admin_role_accessesMaxOrderByAggregateInput } from './admin-role-accesses-max-order-by-aggregate.input';
import { admin_role_accessesMinOrderByAggregateInput } from './admin-role-accesses-min-order-by-aggregate.input';

@InputType()
export class admin_role_accessesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_access_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => admin_role_accessesCountOrderByAggregateInput, {nullable:true})
    _count?: admin_role_accessesCountOrderByAggregateInput;

    @Field(() => admin_role_accessesMaxOrderByAggregateInput, {nullable:true})
    _max?: admin_role_accessesMaxOrderByAggregateInput;

    @Field(() => admin_role_accessesMinOrderByAggregateInput, {nullable:true})
    _min?: admin_role_accessesMinOrderByAggregateInput;
}
