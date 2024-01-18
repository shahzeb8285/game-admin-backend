import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUncheckedUpdateManyWithoutAdmin_rolesNestedInput } from '../admin/admin-unchecked-update-many-without-admin-roles-nested.input';
import { AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput } from '../admin-role-accesses/admin-role-accesses-unchecked-update-many-without-admin-roles-nested.input';

@InputType()
export class AdminRoleUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    admin_role_name?: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminUncheckedUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    admins?: AdminUncheckedUpdateManyWithoutAdmin_rolesNestedInput;

    @Field(() => AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    role_accesses?: AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput;
}
