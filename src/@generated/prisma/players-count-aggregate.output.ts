import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlayersCountAggregate {

    @Field(() => Int, {nullable:false})
    player_id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    tg_id!: number;

    @Field(() => Int, {nullable:false})
    tg_first_name!: number;

    @Field(() => Int, {nullable:false})
    tg_last_name!: number;

    @Field(() => Int, {nullable:false})
    tg_user_name!: number;

    @Field(() => Int, {nullable:false})
    tg_photo_url!: number;

    @Field(() => Int, {nullable:false})
    user_language!: number;

    @Field(() => Int, {nullable:false})
    registration_ip!: number;

    @Field(() => Int, {nullable:false})
    agent_id_r!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    registration_date!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
