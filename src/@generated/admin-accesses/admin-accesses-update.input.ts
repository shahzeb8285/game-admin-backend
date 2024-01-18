import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesUpdateManyWithoutAdmin_accessesNestedInput } from '../admin-role-accesses/admin-role-accesses-update-many-without-admin-accesses-nested.input';

@InputType()
export class AdminAccessesUpdateInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:true})
    access_name?: string;

    @Field(() => AdminRoleAccessesUpdateManyWithoutAdmin_accessesNestedInput, {nullable:true})
    role_accesses?: AdminRoleAccessesUpdateManyWithoutAdmin_accessesNestedInput;
}
