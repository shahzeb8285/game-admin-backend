import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Admin_login_logsCountAggregate } from './admin-login-logs-count-aggregate.output';
import { Admin_login_logsMinAggregate } from './admin-login-logs-min-aggregate.output';
import { Admin_login_logsMaxAggregate } from './admin-login-logs-max-aggregate.output';

@ObjectType()
export class Admin_login_logsGroupBy {

    @Field(() => String, {nullable:false})
    login_id!: string;

    @Field(() => String, {nullable:false})
    admin_id_r!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date | string;

    @Field(() => Admin_login_logsCountAggregate, {nullable:true})
    _count?: Admin_login_logsCountAggregate;

    @Field(() => Admin_login_logsMinAggregate, {nullable:true})
    _min?: Admin_login_logsMinAggregate;

    @Field(() => Admin_login_logsMaxAggregate, {nullable:true})
    _max?: Admin_login_logsMaxAggregate;
}
