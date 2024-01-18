import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminRoleOrderByWithRelationInput } from '../admin-role/admin-role-order-by-with-relation.input';
import { AdminAccessesOrderByWithRelationInput } from '../admin-accesses/admin-accesses-order-by-with-relation.input';

@InputType()
export class AdminRoleAccessesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => AdminRoleOrderByWithRelationInput, {nullable:true})
    admin_roles?: AdminRoleOrderByWithRelationInput;

    @Field(() => AdminAccessesOrderByWithRelationInput, {nullable:true})
    admin_accesses?: AdminAccessesOrderByWithRelationInput;
}
