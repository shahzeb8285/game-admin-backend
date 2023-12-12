import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateNestedOneWithoutAdmin_accessesInput } from '../admin-roles/admin-roles-create-nested-one-without-admin-accesses.input';
import { admin_accessesCreateNestedOneWithoutRole_accessesInput } from '../admin-accesses/admin-accesses-create-nested-one-without-role-accesses.input';

@InputType()
export class admin_role_accessesCreateInput {

    @Field(() => admin_rolesCreateNestedOneWithoutAdmin_accessesInput, {nullable:false})
    admin_roles!: admin_rolesCreateNestedOneWithoutAdmin_accessesInput;

    @Field(() => admin_accessesCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_accesses!: admin_accessesCreateNestedOneWithoutRole_accessesInput;
}
