import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateNestedManyWithoutAdmin_rolesInput } from '../admin/admin-create-nested-many-without-admin-roles.input';
import { AdminRoleAccessesCreateNestedManyWithoutAdmin_rolesInput } from '../admin-role-accesses/admin-role-accesses-create-nested-many-without-admin-roles.input';

@InputType()
export class AdminRoleCreateInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admins?: AdminCreateNestedManyWithoutAdmin_rolesInput;

    @Field(() => AdminRoleAccessesCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    role_accesses?: AdminRoleAccessesCreateNestedManyWithoutAdmin_rolesInput;
}
