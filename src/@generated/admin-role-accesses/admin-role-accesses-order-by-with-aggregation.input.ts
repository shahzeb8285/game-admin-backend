import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminRoleAccessesCountOrderByAggregateInput } from './admin-role-accesses-count-order-by-aggregate.input';
import { AdminRoleAccessesMaxOrderByAggregateInput } from './admin-role-accesses-max-order-by-aggregate.input';
import { AdminRoleAccessesMinOrderByAggregateInput } from './admin-role-accesses-min-order-by-aggregate.input';

@InputType()
export class AdminRoleAccessesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => AdminRoleAccessesCountOrderByAggregateInput, {nullable:true})
    _count?: AdminRoleAccessesCountOrderByAggregateInput;

    @Field(() => AdminRoleAccessesMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminRoleAccessesMaxOrderByAggregateInput;

    @Field(() => AdminRoleAccessesMinOrderByAggregateInput, {nullable:true})
    _min?: AdminRoleAccessesMinOrderByAggregateInput;
}
