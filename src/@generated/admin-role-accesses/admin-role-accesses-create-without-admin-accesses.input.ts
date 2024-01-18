import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleCreateNestedOneWithoutRole_accessesInput } from '../admin-role/admin-role-create-nested-one-without-role-accesses.input';

@InputType()
export class AdminRoleAccessesCreateWithoutAdmin_accessesInput {

    @Field(() => AdminRoleCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_roles!: AdminRoleCreateNestedOneWithoutRole_accessesInput;
}
