import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateOneRequiredWithoutAdmin_accessesNestedInput } from '../admin-roles/admin-roles-update-one-required-without-admin-accesses-nested.input';

@InputType()
export class admin_role_accessesUpdateWithoutAdmin_accessesInput {

    @Field(() => admin_rolesUpdateOneRequiredWithoutAdmin_accessesNestedInput, {nullable:true})
    admin_roles?: admin_rolesUpdateOneRequiredWithoutAdmin_accessesNestedInput;
}
