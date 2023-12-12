import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateOneRequiredWithoutAdmin_accessesNestedInput } from '../admin-roles/admin-roles-update-one-required-without-admin-accesses-nested.input';
import { admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-accesses/admin-accesses-update-one-required-without-role-accesses-nested.input';

@InputType()
export class admin_role_accessesUpdateInput {

    @Field(() => admin_rolesUpdateOneRequiredWithoutAdmin_accessesNestedInput, {nullable:true})
    admin_roles?: admin_rolesUpdateOneRequiredWithoutAdmin_accessesNestedInput;

    @Field(() => admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_accesses?: admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput;
}
