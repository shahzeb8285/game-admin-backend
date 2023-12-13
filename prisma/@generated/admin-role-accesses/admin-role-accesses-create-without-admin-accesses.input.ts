import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateNestedOneWithoutRole_accessesInput } from '../admin-roles/admin-roles-create-nested-one-without-role-accesses.input';

@InputType()
export class admin_role_accessesCreateWithoutAdmin_accessesInput {

    @Field(() => admin_rolesCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_roles!: admin_rolesCreateNestedOneWithoutRole_accessesInput;
}
