import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUncheckedCreateNestedManyWithoutAdmin_rolesInput } from '../admin/admin-unchecked-create-nested-many-without-admin-roles.input';
import { AdminRoleAccessesUncheckedCreateNestedManyWithoutAdmin_rolesInput } from '../admin-role-accesses/admin-role-accesses-unchecked-create-nested-many-without-admin-roles.input';

@InputType()
export class AdminRoleUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminUncheckedCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admins?: AdminUncheckedCreateNestedManyWithoutAdmin_rolesInput;

    @Field(() => AdminRoleAccessesUncheckedCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    role_accesses?: AdminRoleAccessesUncheckedCreateNestedManyWithoutAdmin_rolesInput;
}
