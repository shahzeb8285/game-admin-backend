import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesCreateNestedManyWithoutAdmin_rolesInput } from '../admin-role-accesses/admin-role-accesses-create-nested-many-without-admin-roles.input';

@InputType()
export class admin_rolesCreateWithoutAdminsInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => admin_role_accessesCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    role_accesses?: admin_role_accessesCreateNestedManyWithoutAdmin_rolesInput;
}
