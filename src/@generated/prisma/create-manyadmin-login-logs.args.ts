import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_login_logsCreateManyInput } from '../admin-login-logs/admin-login-logs-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyadminLoginLogsArgs {

    @Field(() => [admin_login_logsCreateManyInput], {nullable:false})
    @Type(() => admin_login_logsCreateManyInput)
    data!: Array<admin_login_logsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
