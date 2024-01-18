import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput } from '../admin-role-accesses/admin-role-accesses-unchecked-update-many-without-admin-roles-nested.input';

@InputType()
export class AdminRoleUncheckedUpdateWithoutAdminsInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    admin_role_name?: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    role_accesses?: AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput;
}
