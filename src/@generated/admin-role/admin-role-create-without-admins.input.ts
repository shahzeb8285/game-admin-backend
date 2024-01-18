import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateNestedManyWithoutAdmin_rolesInput } from '../admin-role-accesses/admin-role-accesses-create-nested-many-without-admin-roles.input';

@InputType()
export class AdminRoleCreateWithoutAdminsInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminRoleAccessesCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    role_accesses?: AdminRoleAccessesCreateNestedManyWithoutAdmin_rolesInput;
}
