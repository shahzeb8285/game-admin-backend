import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminRoleAccessesOrderByRelationAggregateInput } from '../admin-role-accesses/admin-role-accesses-order-by-relation-aggregate.input';

@InputType()
export class AdminAccessesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    access_name?: keyof typeof SortOrder;

    @Field(() => AdminRoleAccessesOrderByRelationAggregateInput, {nullable:true})
    role_accesses?: AdminRoleAccessesOrderByRelationAggregateInput;
}
