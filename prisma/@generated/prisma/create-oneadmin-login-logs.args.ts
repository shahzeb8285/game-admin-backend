import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_login_logsCreateInput } from '../admin-login-logs/admin-login-logs-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneadminLoginLogsArgs {

    @Field(() => admin_login_logsCreateInput, {nullable:false})
    @Type(() => admin_login_logsCreateInput)
    data!: admin_login_logsCreateInput;
}
