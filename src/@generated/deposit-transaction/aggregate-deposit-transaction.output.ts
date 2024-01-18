import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DepositTransactionCountAggregate } from './deposit-transaction-count-aggregate.output';
import { DepositTransactionAvgAggregate } from './deposit-transaction-avg-aggregate.output';
import { DepositTransactionSumAggregate } from './deposit-transaction-sum-aggregate.output';
import { DepositTransactionMinAggregate } from './deposit-transaction-min-aggregate.output';
import { DepositTransactionMaxAggregate } from './deposit-transaction-max-aggregate.output';

@ObjectType()
export class AggregateDepositTransaction {

    @Field(() => DepositTransactionCountAggregate, {nullable:true})
    _count?: DepositTransactionCountAggregate;

    @Field(() => DepositTransactionAvgAggregate, {nullable:true})
    _avg?: DepositTransactionAvgAggregate;

    @Field(() => DepositTransactionSumAggregate, {nullable:true})
    _sum?: DepositTransactionSumAggregate;

    @Field(() => DepositTransactionMinAggregate, {nullable:true})
    _min?: DepositTransactionMinAggregate;

    @Field(() => DepositTransactionMaxAggregate, {nullable:true})
    _max?: DepositTransactionMaxAggregate;
}
