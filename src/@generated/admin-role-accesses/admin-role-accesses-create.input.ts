import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleCreateNestedOneWithoutRole_accessesInput } from '../admin-role/admin-role-create-nested-one-without-role-accesses.input';
import { AdminAccessesCreateNestedOneWithoutRole_accessesInput } from '../admin-accesses/admin-accesses-create-nested-one-without-role-accesses.input';

@InputType()
export class AdminRoleAccessesCreateInput {

    @Field(() => AdminRoleCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_roles!: AdminRoleCreateNestedOneWithoutRole_accessesInput;

    @Field(() => AdminAccessesCreateNestedOneWithoutRole_accessesInput, {nullable:false})
    admin_accesses!: AdminAccessesCreateNestedOneWithoutRole_accessesInput;
}
