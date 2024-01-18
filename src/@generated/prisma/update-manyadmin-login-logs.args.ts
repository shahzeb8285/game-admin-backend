import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_login_logsUpdateManyMutationInput } from '../admin-login-logs/admin-login-logs-update-many-mutation.input';
import { Type } from 'class-transformer';
import { admin_login_logsWhereInput } from '../admin-login-logs/admin-login-logs-where.input';

@ArgsType()
export class UpdateManyadminLoginLogsArgs {

    @Field(() => admin_login_logsUpdateManyMutationInput, {nullable:false})
    @Type(() => admin_login_logsUpdateManyMutationInput)
    data!: admin_login_logsUpdateManyMutationInput;

    @Field(() => admin_login_logsWhereInput, {nullable:true})
    @Type(() => admin_login_logsWhereInput)
    where?: admin_login_logsWhereInput;
}
