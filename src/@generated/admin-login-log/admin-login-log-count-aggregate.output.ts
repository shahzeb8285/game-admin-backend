import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminLoginLogCountAggregate {

    @Field(() => Int, {nullable:false})
    login_id!: number;

    @Field(() => Int, {nullable:false})
    admin_id_r!: number;

    @Field(() => Int, {nullable:false})
    ip!: number;

    @Field(() => Int, {nullable:false})
    login_time!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
