import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Deposit_transactionsCountAggregate } from './deposit-transactions-count-aggregate.output';
import { Deposit_transactionsAvgAggregate } from './deposit-transactions-avg-aggregate.output';
import { Deposit_transactionsSumAggregate } from './deposit-transactions-sum-aggregate.output';
import { Deposit_transactionsMinAggregate } from './deposit-transactions-min-aggregate.output';
import { Deposit_transactionsMaxAggregate } from './deposit-transactions-max-aggregate.output';

@ObjectType()
export class AggregateDeposit_transactions {

    @Field(() => Deposit_transactionsCountAggregate, {nullable:true})
    _count?: Deposit_transactionsCountAggregate;

    @Field(() => Deposit_transactionsAvgAggregate, {nullable:true})
    _avg?: Deposit_transactionsAvgAggregate;

    @Field(() => Deposit_transactionsSumAggregate, {nullable:true})
    _sum?: Deposit_transactionsSumAggregate;

    @Field(() => Deposit_transactionsMinAggregate, {nullable:true})
    _min?: Deposit_transactionsMinAggregate;

    @Field(() => Deposit_transactionsMaxAggregate, {nullable:true})
    _max?: Deposit_transactionsMaxAggregate;
}
