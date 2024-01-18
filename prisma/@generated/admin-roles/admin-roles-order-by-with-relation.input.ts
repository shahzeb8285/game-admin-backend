import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminsOrderByRelationAggregateInput } from '../admins/admins-order-by-relation-aggregate.input';
import { admin_role_accessesOrderByRelationAggregateInput } from '../admin-role-accesses/admin-role-accesses-order-by-relation-aggregate.input';

@InputType()
export class admin_rolesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => AdminsOrderByRelationAggregateInput, {nullable:true})
    admins?: AdminsOrderByRelationAggregateInput;

    @Field(() => admin_role_accessesOrderByRelationAggregateInput, {nullable:true})
    role_accesses?: admin_role_accessesOrderByRelationAggregateInput;
}
