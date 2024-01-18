import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WalletRequestCountAggregate } from './wallet-request-count-aggregate.output';
import { WalletRequestAvgAggregate } from './wallet-request-avg-aggregate.output';
import { WalletRequestSumAggregate } from './wallet-request-sum-aggregate.output';
import { WalletRequestMinAggregate } from './wallet-request-min-aggregate.output';
import { WalletRequestMaxAggregate } from './wallet-request-max-aggregate.output';

@ObjectType()
export class AggregateWalletRequest {

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
