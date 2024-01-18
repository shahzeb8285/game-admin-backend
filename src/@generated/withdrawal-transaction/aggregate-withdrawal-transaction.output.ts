import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WithdrawalTransactionCountAggregate } from './withdrawal-transaction-count-aggregate.output';
import { WithdrawalTransactionAvgAggregate } from './withdrawal-transaction-avg-aggregate.output';
import { WithdrawalTransactionSumAggregate } from './withdrawal-transaction-sum-aggregate.output';
import { WithdrawalTransactionMinAggregate } from './withdrawal-transaction-min-aggregate.output';
import { WithdrawalTransactionMaxAggregate } from './withdrawal-transaction-max-aggregate.output';

@ObjectType()
export class AggregateWithdrawalTransaction {

    @Field(() => WithdrawalTransactionCountAggregate, {nullable:true})
    _count?: WithdrawalTransactionCountAggregate;

    @Field(() => WithdrawalTransactionAvgAggregate, {nullable:true})
    _avg?: WithdrawalTransactionAvgAggregate;

    @Field(() => WithdrawalTransactionSumAggregate, {nullable:true})
    _sum?: WithdrawalTransactionSumAggregate;

    @Field(() => WithdrawalTransactionMinAggregate, {nullable:true})
    _min?: WithdrawalTransactionMinAggregate;

    @Field(() => WithdrawalTransactionMaxAggregate, {nullable:true})
    _max?: WithdrawalTransactionMaxAggregate;
}
