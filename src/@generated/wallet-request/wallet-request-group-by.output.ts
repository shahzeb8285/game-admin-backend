import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WalletRequestCountAggregate } from './wallet-request-count-aggregate.output';
import { WalletRequestAvgAggregate } from './wallet-request-avg-aggregate.output';
import { WalletRequestSumAggregate } from './wallet-request-sum-aggregate.output';
import { WalletRequestMinAggregate } from './wallet-request-min-aggregate.output';
import { WalletRequestMaxAggregate } from './wallet-request-max-aggregate.output';

@ObjectType()
export class WalletRequestGroupBy {

    @Field(() => String, {nullable:false})
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

    @Field(() => WalletRequestCountAggregate, {nullable:true})
    _count?: WalletRequestCountAggregate;

    @Field(() => WalletRequestAvgAggregate, {nullable:true})
    _avg?: WalletRequestAvgAggregate;

    @Field(() => WalletRequestSumAggregate, {nullable:true})
    _sum?: WalletRequestSumAggregate;

    @Field(() => WalletRequestMinAggregate, {nullable:true})
    _min?: WalletRequestMinAggregate;

    @Field(() => WalletRequestMaxAggregate, {nullable:true})
    _max?: WalletRequestMaxAggregate;
}
