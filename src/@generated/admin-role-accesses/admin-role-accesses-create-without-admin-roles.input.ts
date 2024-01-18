import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminAccessesCreateNestedOneWithoutRole_accessesInput } from '../admin-accesses/admin-accesses-create-nested-one-without-role-accesses.input';

@InputType()
export class AdminRoleAccessesCreateWithoutAdmin_rolesInput {

    @Field(() => AdminAccessesCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_accesses!: AdminAccessesCreateNestedOneWithoutRole_accessesInput;
}
