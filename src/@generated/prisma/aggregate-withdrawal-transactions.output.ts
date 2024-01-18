import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Withdrawal_transactionsCountAggregate } from './withdrawal-transactions-count-aggregate.output';
import { Withdrawal_transactionsAvgAggregate } from './withdrawal-transactions-avg-aggregate.output';
import { Withdrawal_transactionsSumAggregate } from './withdrawal-transactions-sum-aggregate.output';
import { Withdrawal_transactionsMinAggregate } from './withdrawal-transactions-min-aggregate.output';
import { Withdrawal_transactionsMaxAggregate } from './withdrawal-transactions-max-aggregate.output';

@ObjectType()
export class AggregateWithdrawal_transactions {

    @Field(() => Withdrawal_transactionsCountAggregate, {nullable:true})
    _count?: Withdrawal_transactionsCountAggregate;

    @Field(() => Withdrawal_transactionsAvgAggregate, {nullable:true})
    _avg?: Withdrawal_transactionsAvgAggregate;

    @Field(() => Withdrawal_transactionsSumAggregate, {nullable:true})
    _sum?: Withdrawal_transactionsSumAggregate;

    @Field(() => Withdrawal_transactionsMinAggregate, {nullable:true})
    _min?: Withdrawal_transactionsMinAggregate;

    @Field(() => Withdrawal_transactionsMaxAggregate, {nullable:true})
    _max?: Withdrawal_transactionsMaxAggregate;
}
