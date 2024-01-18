import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminOrderByRelationAggregateInput } from '../admin/admin-order-by-relation-aggregate.input';
import { AdminRoleAccessesOrderByRelationAggregateInput } from '../admin-role-accesses/admin-role-accesses-order-by-relation-aggregate.input';

@InputType()
export class AdminRoleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => AdminOrderByRelationAggregateInput, {nullable:true})
    admins?: AdminOrderByRelationAggregateInput;

    @Field(() => AdminRoleAccessesOrderByRelationAggregateInput, {nullable:true})
    role_accesses?: AdminRoleAccessesOrderByRelationAggregateInput;
}
