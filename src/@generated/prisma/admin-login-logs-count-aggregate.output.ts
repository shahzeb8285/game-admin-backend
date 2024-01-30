import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Admin_login_logsCountAggregate {

    @Field(() => Int, {nullable:false})
    admin_login_log_id!: number;

    @Field(() => Int, {nullable:false})
    admin_id!: number;

    @Field(() => Int, {nullable:false})
    ip!: number;

    @Field(() => Int, {nullable:false})
    login_time!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
