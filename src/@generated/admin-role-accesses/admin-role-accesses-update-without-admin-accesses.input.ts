import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-roles/admin-roles-update-one-required-without-role-accesses-nested.input';

@InputType()
export class admin_role_accessesUpdateWithoutAdmin_accessesInput {

    @Field(() => admin_rolesUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_roles?: admin_rolesUpdateOneRequiredWithoutRole_accessesNestedInput;
}
