import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Wallet_requestsCountAggregate } from './wallet-requests-count-aggregate.output';
import { Wallet_requestsAvgAggregate } from './wallet-requests-avg-aggregate.output';
import { Wallet_requestsSumAggregate } from './wallet-requests-sum-aggregate.output';
import { Wallet_requestsMinAggregate } from './wallet-requests-min-aggregate.output';
import { Wallet_requestsMaxAggregate } from './wallet-requests-max-aggregate.output';

@ObjectType()
export class AggregateWallet_requests {

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
