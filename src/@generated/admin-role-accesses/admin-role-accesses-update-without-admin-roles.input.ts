import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-accesses/admin-accesses-update-one-required-without-role-accesses-nested.input';

@InputType()
export class admin_role_accessesUpdateWithoutAdmin_rolesInput {

    @Field(() => admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_accesses?: admin_accessesUpdateOneRequiredWithoutRole_accessesNestedInput;
}
