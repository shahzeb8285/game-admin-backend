import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminRoleOrderByWithRelationInput } from '../admin-role/admin-role-order-by-with-relation.input';
import { AdminLoginLogOrderByRelationAggregateInput } from '../admin-login-log/admin-login-log-order-by-relation-aggregate.input';
import { ManualAdjustmentOrderByRelationAggregateInput } from '../manual-adjustment/manual-adjustment-order-by-relation-aggregate.input';

@InputType()
export class AdminOrderByWithRelationInput {

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

    @Field(() => AdminRoleOrderByWithRelationInput, {nullable:true})
    admin_roles?: AdminRoleOrderByWithRelationInput;

    @Field(() => AdminLoginLogOrderByRelationAggregateInput, {nullable:true})
    admin_login_logs?: AdminLoginLogOrderByRelationAggregateInput;

    @Field(() => ManualAdjustmentOrderByRelationAggregateInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentOrderByRelationAggregateInput;
}
