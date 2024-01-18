import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogUpdateManyWithoutAdminsNestedInput } from '../admin-login-log/admin-login-log-update-many-without-admins-nested.input';
import { ManualAdjustmentUpdateManyWithoutAdminsNestedInput } from '../manual-adjustment/manual-adjustment-update-many-without-admins-nested.input';

@InputType()
export class AdminUpdateWithoutAdmin_rolesInput {

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

    @Field(() => AdminLoginLogUpdateManyWithoutAdminsNestedInput, {nullable:true})
    admin_login_logs?: AdminLoginLogUpdateManyWithoutAdminsNestedInput;

    @Field(() => ManualAdjustmentUpdateManyWithoutAdminsNestedInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentUpdateManyWithoutAdminsNestedInput;
}
