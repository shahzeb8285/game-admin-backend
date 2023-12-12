import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { adminsOrderByRelationAggregateInput } from '../admins/admins-order-by-relation-aggregate.input';
import { admin_role_accessesOrderByRelationAggregateInput } from '../admin-role-accesses/admin-role-accesses-order-by-relation-aggregate.input';

@InputType()
export class admin_rolesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => adminsOrderByRelationAggregateInput, {nullable:true})
    admins?: adminsOrderByRelationAggregateInput;

    @Field(() => admin_role_accessesOrderByRelationAggregateInput, {nullable:true})
    admin_accesses?: admin_role_accessesOrderByRelationAggregateInput;
}
