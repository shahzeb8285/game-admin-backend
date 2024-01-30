import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_login_logsWhereInput } from '../admin-login-logs/admin-login-logs-where.input';
import { Type } from 'class-transformer';
import { admin_login_logsOrderByWithRelationInput } from '../admin-login-logs/admin-login-logs-order-by-with-relation.input';
import { admin_login_logsWhereUniqueInput } from '../admin-login-logs/admin-login-logs-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Admin_login_logsScalarFieldEnum } from './admin-login-logs-scalar-field.enum';

@ArgsType()
export class FindManyadminLoginLogsArgs {

    @Field(() => admin_login_logsWhereInput, {nullable:true})
    @Type(() => admin_login_logsWhereInput)
    where?: admin_login_logsWhereInput;

    @Field(() => [admin_login_logsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<admin_login_logsOrderByWithRelationInput>;

    @Field(() => admin_login_logsWhereUniqueInput, {nullable:true})
    cursor?: admin_login_logsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Admin_login_logsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Admin_login_logsScalarFieldEnum>;
}
