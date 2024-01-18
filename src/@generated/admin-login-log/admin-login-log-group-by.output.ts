import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminLoginLogCountAggregate } from './admin-login-log-count-aggregate.output';
import { AdminLoginLogMinAggregate } from './admin-login-log-min-aggregate.output';
import { AdminLoginLogMaxAggregate } from './admin-login-log-max-aggregate.output';

@ObjectType()
export class AdminLoginLogGroupBy {

    @Field(() => String, {nullable:false})
    login_id!: string;

    @Field(() => String, {nullable:false})
    admin_id_r!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date | string;

    @Field(() => AdminLoginLogCountAggregate, {nullable:true})
    _count?: AdminLoginLogCountAggregate;

    @Field(() => AdminLoginLogMinAggregate, {nullable:true})
    _min?: AdminLoginLogMinAggregate;

    @Field(() => AdminLoginLogMaxAggregate, {nullable:true})
    _max?: AdminLoginLogMaxAggregate;
}
