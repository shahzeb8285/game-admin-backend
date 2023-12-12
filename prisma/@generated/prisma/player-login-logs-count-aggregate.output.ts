import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Player_login_logsCountAggregate {

    @Field(() => Int, {nullable:false})
    player_id_r!: number;

    @Field(() => Int, {nullable:false})
    ip!: number;

    @Field(() => Int, {nullable:false})
    login_time!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
