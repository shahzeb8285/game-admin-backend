import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateNestedOneWithoutAdmin_accessesInput } from '../admin-roles/admin-roles-create-nested-one-without-admin-accesses.input';

@InputType()
export class admin_role_accessesCreateWithoutAdmin_accessesInput {

    @Field(() => admin_rolesCreateNestedOneWithoutAdmin_accessesInput, {nullable:false})
    admin_roles!: admin_rolesCreateNestedOneWithoutAdmin_accessesInput;
}
