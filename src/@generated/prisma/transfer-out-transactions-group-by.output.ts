import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { real_currency } from './real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from './game-currency.enum';
import { wallet_transaction_status } from './wallet-transaction-status.enum';
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
    counterpart_platform!: string;

    @Field(() => String, {nullable:false})
    counterpart_username!: string;

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
