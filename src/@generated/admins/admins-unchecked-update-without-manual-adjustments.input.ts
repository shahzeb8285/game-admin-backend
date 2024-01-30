import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput } from '../admin-login-logs/admin-login-logs-unchecked-update-many-without-admins-nested.input';

@InputType()
export class adminsUncheckedUpdateWithoutManual_adjustmentsInput {

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

    @Field(() => admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput, {nullable:true})
    admin_login_logs?: admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput;
}
