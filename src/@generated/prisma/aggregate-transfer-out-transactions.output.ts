import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Transfer_out_transactionsCountAggregate } from './transfer-out-transactions-count-aggregate.output';
import { Transfer_out_transactionsAvgAggregate } from './transfer-out-transactions-avg-aggregate.output';
import { Transfer_out_transactionsSumAggregate } from './transfer-out-transactions-sum-aggregate.output';
import { Transfer_out_transactionsMinAggregate } from './transfer-out-transactions-min-aggregate.output';
import { Transfer_out_transactionsMaxAggregate } from './transfer-out-transactions-max-aggregate.output';

@ObjectType()
export class AggregateTransfer_out_transactions {

    @Field(() => Transfer_out_transactionsCountAggregate, {nullable:true})
    _count?: Transfer_out_transactionsCountAggregate;

    @Field(() => Transfer_out_transactionsAvgAggregate, {nullable:true})
    _avg?: Transfer_out_transactionsAvgAggregate;

    @Field(() => Transfer_out_transactionsSumAggregate, {nullable:true})
    _sum?: Transfer_out_transactionsSumAggregate;

    @Field(() => Transfer_out_transactionsMinAggregate, {nullable:true})
    _min?: Transfer_out_transactionsMinAggregate;

    @Field(() => Transfer_out_transactionsMaxAggregate, {nullable:true})
    _max?: Transfer_out_transactionsMaxAggregate;
}
