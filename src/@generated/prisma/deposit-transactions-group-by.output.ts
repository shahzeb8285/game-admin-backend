import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from './transaction-type.enum';
import { Deposit_transactionsCountAggregate } from './deposit-transactions-count-aggregate.output';
import { Deposit_transactionsAvgAggregate } from './deposit-transactions-avg-aggregate.output';
import { Deposit_transactionsSumAggregate } from './deposit-transactions-sum-aggregate.output';
import { Deposit_transactionsMinAggregate } from './deposit-transactions-min-aggregate.output';
import { Deposit_transactionsMaxAggregate } from './deposit-transactions-max-aggregate.output';

@ObjectType()
export class Deposit_transactionsGroupBy {

    @Field(() => String, {nullable:false})
    deposit_transaction_id!: string;

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
    admin_bank_account_id_r!: string;

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
