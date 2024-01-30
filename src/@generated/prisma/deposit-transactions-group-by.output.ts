import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { real_currency } from './real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from './game-currency.enum';
import { wallet_transaction_status } from './wallet-transaction-status.enum';
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
    player_id!: string;

    @Field(() => real_currency, {nullable:false})
    transaction_currency!: keyof typeof real_currency;

    @Field(() => Float, {nullable:false})
    transaction_amount!: number;

    @Field(() => game_currency, {nullable:false})
    game_currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    game_amount!: number;

    @Field(() => String, {nullable:false})
    admin_bank_account_id!: string;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => String, {nullable:false})
    player_remarks!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => String, {nullable:false})
    processed_by!: string;

    @Field(() => Date, {nullable:false})
    process_time!: Date | string;

    @Field(() => wallet_transaction_status, {nullable:false})
    status!: keyof typeof wallet_transaction_status;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

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
