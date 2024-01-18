import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogUncheckedUpdateManyWithoutAdminsNestedInput } from '../admin-login-log/admin-login-log-unchecked-update-many-without-admins-nested.input';
import { ManualAdjustmentUncheckedUpdateManyWithoutAdminsNestedInput } from '../manual-adjustment/manual-adjustment-unchecked-update-many-without-admins-nested.input';

@InputType()
export class AdminUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:true})
    admin_name?: string;

    @Field(() => String, {nullable:true})
    admin_password?: string;

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminLoginLogUncheckedUpdateManyWithoutAdminsNestedInput, {nullable:true})
    admin_login_logs?: AdminLoginLogUncheckedUpdateManyWithoutAdminsNestedInput;

    @Field(() => ManualAdjustmentUncheckedUpdateManyWithoutAdminsNestedInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentUncheckedUpdateManyWithoutAdminsNestedInput;
}
