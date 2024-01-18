import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Player_walletsCountAggregate {

    @Field(() => Int, {nullable:false})
    player_wallet_id!: number;

    @Field(() => Int, {nullable:false})
    player_id_r!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    frozen_amount!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
