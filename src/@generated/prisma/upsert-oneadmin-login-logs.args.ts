import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_login_logsWhereUniqueInput } from '../admin-login-logs/admin-login-logs-where-unique.input';
import { Type } from 'class-transformer';
import { admin_login_logsCreateInput } from '../admin-login-logs/admin-login-logs-create.input';
import { admin_login_logsUpdateInput } from '../admin-login-logs/admin-login-logs-update.input';

@ArgsType()
export class UpsertOneadminLoginLogsArgs {

    @Field(() => admin_login_logsWhereUniqueInput, {nullable:false})
    @Type(() => admin_login_logsWhereUniqueInput)
    where!: admin_login_logsWhereUniqueInput;

    @Field(() => admin_login_logsCreateInput, {nullable:false})
    @Type(() => admin_login_logsCreateInput)
    create!: admin_login_logsCreateInput;

    @Field(() => admin_login_logsUpdateInput, {nullable:false})
    @Type(() => admin_login_logsUpdateInput)
    update!: admin_login_logsUpdateInput;
}
