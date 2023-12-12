import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Admin_login_logsCountAggregate } from './admin-login-logs-count-aggregate.output';
import { Admin_login_logsMinAggregate } from './admin-login-logs-min-aggregate.output';
import { Admin_login_logsMaxAggregate } from './admin-login-logs-max-aggregate.output';

@ObjectType()
export class AggregateAdmin_login_logs {

    @Field(() => Admin_login_logsCountAggregate, {nullable:true})
    _count?: Admin_login_logsCountAggregate;

    @Field(() => Admin_login_logsMinAggregate, {nullable:true})
    _min?: Admin_login_logsMinAggregate;

    @Field(() => Admin_login_logsMaxAggregate, {nullable:true})
    _max?: Admin_login_logsMaxAggregate;
}
