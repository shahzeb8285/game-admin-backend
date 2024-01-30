import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput } from '../admin-role-accesses/admin-role-accesses-unchecked-update-many-without-admin-accesses-nested.input';

@InputType()
export class admin_accessesUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:true})
    access_name?: string;

    @Field(() => admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput, {nullable:true})
    admin_role_accesses?: admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput;
}
