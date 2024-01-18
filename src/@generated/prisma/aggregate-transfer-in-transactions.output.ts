import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Transfer_in_transactionsCountAggregate } from './transfer-in-transactions-count-aggregate.output';
import { Transfer_in_transactionsAvgAggregate } from './transfer-in-transactions-avg-aggregate.output';
import { Transfer_in_transactionsSumAggregate } from './transfer-in-transactions-sum-aggregate.output';
import { Transfer_in_transactionsMinAggregate } from './transfer-in-transactions-min-aggregate.output';
import { Transfer_in_transactionsMaxAggregate } from './transfer-in-transactions-max-aggregate.output';

@ObjectType()
export class AggregateTransfer_in_transactions {

    @Field(() => Transfer_in_transactionsCountAggregate, {nullable:true})
    _count?: Transfer_in_transactionsCountAggregate;

    @Field(() => Transfer_in_transactionsAvgAggregate, {nullable:true})
    _avg?: Transfer_in_transactionsAvgAggregate;

    @Field(() => Transfer_in_transactionsSumAggregate, {nullable:true})
    _sum?: Transfer_in_transactionsSumAggregate;

    @Field(() => Transfer_in_transactionsMinAggregate, {nullable:true})
    _min?: Transfer_in_transactionsMinAggregate;

    @Field(() => Transfer_in_transactionsMaxAggregate, {nullable:true})
    _max?: Transfer_in_transactionsMaxAggregate;
}
