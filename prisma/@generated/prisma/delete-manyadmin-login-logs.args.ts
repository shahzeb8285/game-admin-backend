import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_login_logsWhereInput } from '../admin-login-logs/admin-login-logs-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyadminLoginLogsArgs {

    @Field(() => admin_login_logsWhereInput, {nullable:true})
    @Type(() => admin_login_logsWhereInput)
    where?: admin_login_logsWhereInput;
}
