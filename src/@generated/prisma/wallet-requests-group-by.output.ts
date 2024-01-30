import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Wallet_requestsCountAggregate } from './wallet-requests-count-aggregate.output';
import { Wallet_requestsAvgAggregate } from './wallet-requests-avg-aggregate.output';
import { Wallet_requestsSumAggregate } from './wallet-requests-sum-aggregate.output';
import { Wallet_requestsMinAggregate } from './wallet-requests-min-aggregate.output';
import { Wallet_requestsMaxAggregate } from './wallet-requests-max-aggregate.output';

@ObjectType()
export class Wallet_requestsGroupBy {

    @Field(() => String, {nullable:false})
    wallet_request_id!: string;

    @Field(() => String, {nullable:false})
    tid!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

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

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Wallet_requestsCountAggregate, {nullable:true})
    _count?: Wallet_requestsCountAggregate;

    @Field(() => Wallet_requestsAvgAggregate, {nullable:true})
    _avg?: Wallet_requestsAvgAggregate;

    @Field(() => Wallet_requestsSumAggregate, {nullable:true})
    _sum?: Wallet_requestsSumAggregate;

    @Field(() => Wallet_requestsMinAggregate, {nullable:true})
    _min?: Wallet_requestsMinAggregate;

    @Field(() => Wallet_requestsMaxAggregate, {nullable:true})
    _max?: Wallet_requestsMaxAggregate;
}
