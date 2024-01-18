import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlayerWalletCountAggregate } from './player-wallet-count-aggregate.output';
import { PlayerWalletAvgAggregate } from './player-wallet-avg-aggregate.output';
import { PlayerWalletSumAggregate } from './player-wallet-sum-aggregate.output';
import { PlayerWalletMinAggregate } from './player-wallet-min-aggregate.output';
import { PlayerWalletMaxAggregate } from './player-wallet-max-aggregate.output';

@ObjectType()
export class PlayerWalletGroupBy {

    @Field(() => String, {nullable:false})
    player_wallet_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    frozen_amount!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => PlayerWalletCountAggregate, {nullable:true})
    _count?: PlayerWalletCountAggregate;

    @Field(() => PlayerWalletAvgAggregate, {nullable:true})
    _avg?: PlayerWalletAvgAggregate;

    @Field(() => PlayerWalletSumAggregate, {nullable:true})
    _sum?: PlayerWalletSumAggregate;

    @Field(() => PlayerWalletMinAggregate, {nullable:true})
    _min?: PlayerWalletMinAggregate;

    @Field(() => PlayerWalletMaxAggregate, {nullable:true})
    _max?: PlayerWalletMaxAggregate;
}
