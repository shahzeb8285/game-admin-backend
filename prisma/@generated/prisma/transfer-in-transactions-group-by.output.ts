import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from './transaction-type.enum';
import { Transfer_in_transactionsCountAggregate } from './transfer-in-transactions-count-aggregate.output';
import { Transfer_in_transactionsAvgAggregate } from './transfer-in-transactions-avg-aggregate.output';
import { Transfer_in_transactionsSumAggregate } from './transfer-in-transactions-sum-aggregate.output';
import { Transfer_in_transactionsMinAggregate } from './transfer-in-transactions-min-aggregate.output';
import { Transfer_in_transactionsMaxAggregate } from './transfer-in-transactions-max-aggregate.output';

@ObjectType()
export class Transfer_in_transactionsGroupBy {

    @Field(() => String, {nullable:false})
    transfer_in_Transaction_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    request_time!: Date | string;

    @Field(() => Date, {nullable:false})
    process_time!: Date | string;

    @Field(() => String, {nullable:false})
    processed_by!: string;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => TransactionType, {nullable:false})
    status!: keyof typeof TransactionType;

    @Field(() => String, {nullable:false})
    counterpart_platform!: string;

    @Field(() => String, {nullable:false})
    counterpart_username!: string;

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
