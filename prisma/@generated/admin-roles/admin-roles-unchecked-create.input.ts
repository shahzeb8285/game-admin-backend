import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUncheckedCreateNestedManyWithoutAdmin_rolesInput } from '../admins/admins-unchecked-create-nested-many-without-admin-roles.input';
import { admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_rolesInput } from '../admin-role-accesses/admin-role-accesses-unchecked-create-nested-many-without-admin-roles.input';

@InputType()
export class admin_rolesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => adminsUncheckedCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admins?: adminsUncheckedCreateNestedManyWithoutAdmin_rolesInput;

    @Field(() => admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admin_accesses?: admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_rolesInput;
}
