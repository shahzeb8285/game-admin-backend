import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Player } from '../player/player.model';

@ObjectType()
export class WalletRequest {

    @Field(() => ID, {nullable:false})
    wallet_request_id!: string;

    @Field(() => String, {nullable:false})
    t_id!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:false})
    i_game_id!: string;

    @Field(() => String, {nullable:false})
    i_extparam!: string;

    @Field(() => String, {nullable:false})
    i_rollback!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => String, {nullable:false})
    i_action_id!: string;

    @Field(() => String, {nullable:false})
    i_reference_action_id!: string;

    @Field(() => Boolean, {nullable:false})
    round_start!: boolean;

    @Field(() => Boolean, {nullable:false})
    round_ended!: boolean;

    @Field(() => String, {nullable:false})
    game_extra!: string;

    @Field(() => String, {nullable:false})
    subtype!: string;

    @Field(() => Int, {nullable:false})
    jackpot_win!: number;

    @Field(() => String, {nullable:false})
    hmac!: string;

    @Field(() => String, {nullable:false})
    response!: string;

    @Field(() => Player, {nullable:false})
    players?: Player;
}
