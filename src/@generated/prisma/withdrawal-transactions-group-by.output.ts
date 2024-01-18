import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from './transaction-type.enum';
import { Withdrawal_transactionsCountAggregate } from './withdrawal-transactions-count-aggregate.output';
import { Withdrawal_transactionsAvgAggregate } from './withdrawal-transactions-avg-aggregate.output';
import { Withdrawal_transactionsSumAggregate } from './withdrawal-transactions-sum-aggregate.output';
import { Withdrawal_transactionsMinAggregate } from './withdrawal-transactions-min-aggregate.output';
import { Withdrawal_transactionsMaxAggregate } from './withdrawal-transactions-max-aggregate.output';

@ObjectType()
export class Withdrawal_transactionsGroupBy {

    @Field(() => String, {nullable:false})
    withdrawal_transaction_id!: string;

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
