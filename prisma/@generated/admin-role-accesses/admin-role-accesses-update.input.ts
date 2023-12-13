import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-roles/admin-roles-update-one-required-without-role-accesses-nested.input';
import { admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-accesses/admin-accesses-update-one-required-without-role-accesses-nested.input';

@InputType()
export class admin_role_accessesUpdateInput {

    @Field(() => admin_rolesUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_roles?: admin_rolesUpdateOneRequiredWithoutRole_accessesNestedInput;

    @Field(() => admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_accesses?: admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput;
}
