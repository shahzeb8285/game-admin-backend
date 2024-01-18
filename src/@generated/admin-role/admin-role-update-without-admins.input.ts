import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesUpdateManyWithoutAdmin_rolesNestedInput } from '../admin-role-accesses/admin-role-accesses-update-many-without-admin-roles-nested.input';

@InputType()
export class AdminRoleUpdateWithoutAdminsInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    admin_role_name?: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminRoleAccessesUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    role_accesses?: AdminRoleAccessesUpdateManyWithoutAdmin_rolesNestedInput;
}
