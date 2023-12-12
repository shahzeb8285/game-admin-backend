import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Wallet_requestsCountAggregate {

    @Field(() => Int, {nullable:false})
    wallet_request_id!: number;

    @Field(() => Int, {nullable:false})
    t_id!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    player_id_r!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    i_game_id!: number;

    @Field(() => Int, {nullable:false})
    i_extparam!: number;

    @Field(() => Int, {nullable:false})
    i_rollback!: number;

    @Field(() => Int, {nullable:false})
    i_gamedesc!: number;

    @Field(() => Int, {nullable:false})
    i_action_id!: number;

    @Field(() => Int, {nullable:false})
    i_reference_action_id!: number;

    @Field(() => Int, {nullable:false})
    round_start!: number;

    @Field(() => Int, {nullable:false})
    round_ended!: number;

    @Field(() => Int, {nullable:false})
    game_extra!: number;

    @Field(() => Int, {nullable:false})
    subtype!: number;

    @Field(() => Int, {nullable:false})
    jackpot_win!: number;

    @Field(() => Int, {nullable:false})
    hmac!: number;

    @Field(() => Int, {nullable:false})
    response!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
