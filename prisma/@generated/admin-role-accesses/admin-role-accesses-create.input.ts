import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateNestedOneWithoutRole_accessesInput } from '../admin-roles/admin-roles-create-nested-one-without-role-accesses.input';
import { admin_accessesCreateNestedOneWithoutRole_accessesInput } from '../admin-accesses/admin-accesses-create-nested-one-without-role-accesses.input';

@InputType()
export class admin_role_accessesCreateInput {

    @Field(() => admin_rolesCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_roles!: admin_rolesCreateNestedOneWithoutRole_accessesInput;

    @Field(() => admin_accessesCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_accesses!: admin_accessesCreateNestedOneWithoutRole_accessesInput;
}
