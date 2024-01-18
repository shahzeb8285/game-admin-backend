import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminRoleCountOrderByAggregateInput } from './admin-role-count-order-by-aggregate.input';
import { AdminRoleMaxOrderByAggregateInput } from './admin-role-max-order-by-aggregate.input';
import { AdminRoleMinOrderByAggregateInput } from './admin-role-min-order-by-aggregate.input';

@InputType()
export class AdminRoleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => AdminRoleCountOrderByAggregateInput, {nullable:true})
    _count?: AdminRoleCountOrderByAggregateInput;

    @Field(() => AdminRoleMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminRoleMaxOrderByAggregateInput;

    @Field(() => AdminRoleMinOrderByAggregateInput, {nullable:true})
    _min?: AdminRoleMinOrderByAggregateInput;
}
