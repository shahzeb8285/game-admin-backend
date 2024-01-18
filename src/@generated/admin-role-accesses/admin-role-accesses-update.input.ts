import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-role/admin-role-update-one-required-without-role-accesses-nested.input';
import { AdminAccessesUpdateOneRequiredWithoutRole_accessesNestedInput } from '../admin-accesses/admin-accesses-update-one-required-without-role-accesses-nested.input';

@InputType()
export class AdminRoleAccessesUpdateInput {

    @Field(() => AdminRoleUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_roles?: AdminRoleUpdateOneRequiredWithoutRole_accessesNestedInput;

    @Field(() => AdminAccessesUpdateOneRequiredWithoutRole_accessesNestedInput, {nullable:true})
    admin_accesses?: AdminAccessesUpdateOneRequiredWithoutRole_accessesNestedInput;
}
