import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminLoginLogCountAggregate } from './admin-login-log-count-aggregate.output';
import { AdminLoginLogMinAggregate } from './admin-login-log-min-aggregate.output';
import { AdminLoginLogMaxAggregate } from './admin-login-log-max-aggregate.output';

@ObjectType()
export class AggregateAdminLoginLog {

    @Field(() => AdminLoginLogCountAggregate, {nullable:true})
    _count?: AdminLoginLogCountAggregate;

    @Field(() => AdminLoginLogMinAggregate, {nullable:true})
    _min?: AdminLoginLogMinAggregate;

    @Field(() => AdminLoginLogMaxAggregate, {nullable:true})
    _max?: AdminLoginLogMaxAggregate;
}
