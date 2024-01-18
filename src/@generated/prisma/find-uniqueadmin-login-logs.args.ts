import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_login_logsWhereUniqueInput } from '../admin-login-logs/admin-login-logs-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueadminLoginLogsArgs {

    @Field(() => admin_login_logsWhereUniqueInput, {nullable:false})
    @Type(() => admin_login_logsWhereUniqueInput)
    where!: admin_login_logsWhereUniqueInput;
}
