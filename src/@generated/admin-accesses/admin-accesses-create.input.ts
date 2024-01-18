import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateNestedManyWithoutAdmin_accessesInput } from '../admin-role-accesses/admin-role-accesses-create-nested-many-without-admin-accesses.input';

@InputType()
export class AdminAccessesCreateInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:false})
    access_name!: string;

    @Field(() => AdminRoleAccessesCreateNestedManyWithoutAdmin_accessesInput, {nullable:true})
    role_accesses?: AdminRoleAccessesCreateNestedManyWithoutAdmin_accessesInput;
}
