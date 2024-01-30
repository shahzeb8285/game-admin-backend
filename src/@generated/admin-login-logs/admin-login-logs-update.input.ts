import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUpdateOneRequiredWithoutAdmin_login_logsNestedInput } from '../admins/admins-update-one-required-without-admin-login-logs-nested.input';

@InputType()
export class admin_login_logsUpdateInput {

    @Field(() => String, {nullable:true})
    admin_login_log_id?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;

    @Field(() => adminsUpdateOneRequiredWithoutAdmin_login_logsNestedInput, {nullable:true})
    admins?: adminsUpdateOneRequiredWithoutAdmin_login_logsNestedInput;
}
