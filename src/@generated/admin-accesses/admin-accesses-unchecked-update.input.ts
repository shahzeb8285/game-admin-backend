import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput } from '../admin-role-accesses/admin-role-accesses-unchecked-update-many-without-admin-accesses-nested.input';

@InputType()
export class AdminAccessesUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:true})
    access_name?: string;

    @Field(() => AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput, {nullable:true})
    role_accesses?: AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput;
}
