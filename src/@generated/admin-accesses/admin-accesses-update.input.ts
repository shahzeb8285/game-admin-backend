import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesUpdateManyWithoutAdmin_accessesNestedInput } from '../admin-role-accesses/admin-role-accesses-update-many-without-admin-accesses-nested.input';

@InputType()
export class admin_accessesUpdateInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:true})
    access_name?: string;

    @Field(() => admin_role_accessesUpdateManyWithoutAdmin_accessesNestedInput, {nullable:true})
    admin_role_accesses?: admin_role_accessesUpdateManyWithoutAdmin_accessesNestedInput;
}
