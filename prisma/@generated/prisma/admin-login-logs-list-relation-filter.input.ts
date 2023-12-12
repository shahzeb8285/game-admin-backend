import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsWhereInput } from '../admin-login-logs/admin-login-logs-where.input';

@InputType()
export class Admin_login_logsListRelationFilter {

    @Field(() => admin_login_logsWhereInput, {nullable:true})
    every?: admin_login_logsWhereInput;

    @Field(() => admin_login_logsWhereInput, {nullable:true})
    some?: admin_login_logsWhereInput;

    @Field(() => admin_login_logsWhereInput, {nullable:true})
    none?: admin_login_logsWhereInput;
}
