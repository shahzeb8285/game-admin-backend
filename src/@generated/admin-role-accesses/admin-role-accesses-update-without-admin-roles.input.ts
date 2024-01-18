import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminAccessesUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-accesses/admin-accesses-update-one-required-without-role-accesses-nested.input';

@InputType()
export class AdminRoleAccessesUpdateWithoutAdmin_rolesInput {

    @Field(() => AdminAccessesUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_accesses?: AdminAccessesUpdateOneRequiredWithoutRole_accessesNestedInput;
}
