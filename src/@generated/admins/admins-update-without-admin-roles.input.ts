import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsUpdateManyWithoutAdminsNestedInput } from '../admin-login-logs/admin-login-logs-update-many-without-admins-nested.input';
import { manual_adjustmentsUpdateManyWithoutAdminsNestedInput } from '../manual-adjustments/manual-adjustments-update-many-without-admins-nested.input';

@InputType()
export class adminsUpdateWithoutAdmin_rolesInput {

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

    @Field(() => admin_login_logsUpdateManyWithoutAdminsNestedInput, {nullable:true})
    admin_login_logs?: admin_login_logsUpdateManyWithoutAdminsNestedInput;

    @Field(() => manual_adjustmentsUpdateManyWithoutAdminsNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUpdateManyWithoutAdminsNestedInput;
}