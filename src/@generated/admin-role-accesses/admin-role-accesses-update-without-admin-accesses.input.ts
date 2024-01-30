import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateOneRequiredWithoutAdmin_role_accessesNestedInput } from '../admin-roles/admin-roles-update-one-required-without-admin-role-accesses-nested.input';

@InputType()
export class admin_role_accessesUpdateWithoutAdmin_accessesInput {

    @Field(() => String, {nullable:true})
    admin_role_access_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => admin_rolesUpdateOneRequiredWithoutAdmin_role_accessesNestedInput, {nullable:true})
    admin_roles?: admin_rolesUpdateOneRequiredWithoutAdmin_role_accessesNestedInput;
}
