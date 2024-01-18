import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-role/admin-role-update-one-required-without-role-accesses-nested.input';

@InputType()
export class AdminRoleAccessesUpdateWithoutAdmin_accessesInput {

    @Field(() => AdminRoleUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_roles?: AdminRoleUpdateOneRequiredWithoutRole_accessesNestedInput;
}
