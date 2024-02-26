import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { real_currency } from './real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from './game-currency.enum';
import { wallet_transaction_status } from './wallet-transaction-status.enum';
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
    player_bank_account_id!: string;

    @Field(() => Date, {nullable:false})
    trans_date!: Date | string;

    @Field(() => String, {nullable:false})
    player_remarks!: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    processed_by?: string;

    @Field(() => Date, {nullable:true})
    process_time?: Date | string;

    @Field(() => wallet_transaction_status, {nullable:false})
    status!: keyof typeof wallet_transaction_status;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

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
