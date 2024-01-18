import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesCreateNestedOneWithoutRole_accessesInput } from '../admin-accesses/admin-accesses-create-nested-one-without-role-accesses.input';

@InputType()
export class admin_role_accessesCreateWithoutAdmin_rolesInput {

    @Field(() => admin_accessesCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_accesses!: admin_accessesCreateNestedOneWithoutRole_accessesInput;
}
