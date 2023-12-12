import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { admin_rolesOrderByWithRelationInput } from '../admin-roles/admin-roles-order-by-with-relation.input';
import { admin_accessesOrderByWithRelationInput } from '../admin-accesses/admin-accesses-order-by-with-relation.input';

@InputType()
export class admin_role_accessesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => admin_rolesOrderByWithRelationInput, {nullable:true})
    admin_roles?: admin_rolesOrderByWithRelationInput;

    @Field(() => admin_accessesOrderByWithRelationInput, {nullable:true})
    admin_accesses?: admin_accessesOrderByWithRelationInput;
}
