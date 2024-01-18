import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUpdateManyWithoutAdmin_rolesNestedInput } from '../admin/admin-update-many-without-admin-roles-nested.input';
import { AdminRoleAccessesUpdateManyWithoutAdmin_rolesNestedInput } from '../admin-role-accesses/admin-role-accesses-update-many-without-admin-roles-nested.input';

@InputType()
export class AdminRoleUpdateInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    admin_role_name?: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    admins?: AdminUpdateManyWithoutAdmin_rolesNestedInput;

    @Field(() => AdminRoleAccessesUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    role_accesses?: AdminRoleAccessesUpdateManyWithoutAdmin_rolesNestedInput;
}
