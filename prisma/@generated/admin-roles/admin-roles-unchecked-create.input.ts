import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsUncheckedCreateNestedManyWithoutAdmin_rolesInput } from '../admins/admins-unchecked-create-nested-many-without-admin-roles.input';
import { admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_rolesInput } from '../admin-role-accesses/admin-role-accesses-unchecked-create-nested-many-without-admin-roles.input';

@InputType()
export class admin_rolesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminsUncheckedCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admins?: AdminsUncheckedCreateNestedManyWithoutAdmin_rolesInput;

    @Field(() => admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    role_accesses?: admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_rolesInput;
}
