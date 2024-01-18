import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlayerWalletCountAggregate } from './player-wallet-count-aggregate.output';
import { PlayerWalletAvgAggregate } from './player-wallet-avg-aggregate.output';
import { PlayerWalletSumAggregate } from './player-wallet-sum-aggregate.output';
import { PlayerWalletMinAggregate } from './player-wallet-min-aggregate.output';
import { PlayerWalletMaxAggregate } from './player-wallet-max-aggregate.output';

@ObjectType()
export class AggregatePlayerWallet {

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
