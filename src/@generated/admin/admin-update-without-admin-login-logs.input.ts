import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleUpdateOneRequiredWithoutAdminsNestedInput } from '../admin-role/admin-role-update-one-required-without-admins-nested.input';
import { ManualAdjustmentUpdateManyWithoutAdminsNestedInput } from '../manual-adjustment/manual-adjustment-update-many-without-admins-nested.input';

@InputType()
export class AdminUpdateWithoutAdmin_login_logsInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:true})
    admin_name?: string;

    @Field(() => String, {nullable:true})
    admin_password?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminRoleUpdateOneRequiredWithoutAdminsNestedInput, {nullable:true})
    admin_roles?: AdminRoleUpdateOneRequiredWithoutAdminsNestedInput;

    @Field(() => ManualAdjustmentUpdateManyWithoutAdminsNestedInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentUpdateManyWithoutAdminsNestedInput;
}
