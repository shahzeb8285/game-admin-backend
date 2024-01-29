import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUpdateOneRequiredWithoutAdmin_login_logsNestedInput } from '../admin/admin-update-one-required-without-admin-login-logs-nested.input';

@InputType()
export class AdminLoginLogUpdateInput {

    @Field(() => String, {nullable:true})
    admin_login_log_id?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;

    @Field(() => AdminUpdateOneRequiredWithoutAdmin_login_logsNestedInput, {nullable:true})
    admins?: AdminUpdateOneRequiredWithoutAdmin_login_logsNestedInput;
}
