import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from './transaction-type.enum';
import { Transfer_out_transactionsCountAggregate } from './transfer-out-transactions-count-aggregate.output';
import { Transfer_out_transactionsAvgAggregate } from './transfer-out-transactions-avg-aggregate.output';
import { Transfer_out_transactionsSumAggregate } from './transfer-out-transactions-sum-aggregate.output';
import { Transfer_out_transactionsMinAggregate } from './transfer-out-transactions-min-aggregate.output';
import { Transfer_out_transactionsMaxAggregate } from './transfer-out-transactions-max-aggregate.output';

@ObjectType()
export class Transfer_out_transactionsGroupBy {

    @Field(() => String, {nullable:false})
    transfer_out_transaction_id!: string;

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
