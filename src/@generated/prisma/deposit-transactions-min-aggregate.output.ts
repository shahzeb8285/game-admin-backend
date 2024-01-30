import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { real_currency } from './real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from './game-currency.enum';
import { wallet_transaction_status } from './wallet-transaction-status.enum';

@ObjectType()
export class Deposit_transactionsMinAggregate {

    @Field(() => String, {nullable:true})
    deposit_transaction_id?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => real_currency, {nullable:true})
    transaction_currency?: keyof typeof real_currency;

    @Field(() => Float, {nullable:true})
    transaction_amount?: number;

    @Field(() => game_currency, {nullable:true})
    game_currency?: keyof typeof game_currency;

    @Field(() => Float, {nullable:true})
    game_amount?: number;

    @Field(() => String, {nullable:true})
    admin_bank_account_id?: string;

    @Field(() => String, {nullable:true})
    transaction_date?: string;

    @Field(() => String, {nullable:true})
    player_remarks?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    processed_by?: string;

    @Field(() => Date, {nullable:true})
    process_time?: Date | string;

    @Field(() => wallet_transaction_status, {nullable:true})
    status?: keyof typeof wallet_transaction_status;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;
}
