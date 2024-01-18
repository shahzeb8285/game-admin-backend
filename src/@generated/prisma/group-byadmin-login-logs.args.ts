import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_login_logsWhereInput } from '../admin-login-logs/admin-login-logs-where.input';
import { Type } from 'class-transformer';
import { admin_login_logsOrderByWithAggregationInput } from '../admin-login-logs/admin-login-logs-order-by-with-aggregation.input';
import { Admin_login_logsScalarFieldEnum } from './admin-login-logs-scalar-field.enum';
import { admin_login_logsScalarWhereWithAggregatesInput } from '../admin-login-logs/admin-login-logs-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByadminLoginLogsArgs {

    @Field(() => admin_login_logsWhereInput, {nullable:true})
    @Type(() => admin_login_logsWhereInput)
    where?: admin_login_logsWhereInput;

    @Field(() => [admin_login_logsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<admin_login_logsOrderByWithAggregationInput>;

    @Field(() => [Admin_login_logsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Admin_login_logsScalarFieldEnum>;

    @Field(() => admin_login_logsScalarWhereWithAggregatesInput, {nullable:true})
    having?: admin_login_logsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
