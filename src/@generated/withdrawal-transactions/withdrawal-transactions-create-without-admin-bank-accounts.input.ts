import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { real_currency } from '../prisma/real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from '../prisma/game-currency.enum';
import { wallet_transaction_status } from '../prisma/wallet-transaction-status.enum';
import { playersCreateNestedOneWithoutWithdrawal_transactionsInput } from '../players/players-create-nested-one-without-withdrawal-transactions.input';
import { player_bank_accountsCreateNestedOneWithoutWithdrawal_transactionsInput } from '../player-bank-accounts/player-bank-accounts-create-nested-one-without-withdrawal-transactions.input';

@InputType()
export class withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput {

    @Field(() => String, {nullable:true})
    withdrawal_transaction_id?: string;

    @Field(() => real_currency, {nullable:false})
    transaction_currency!: keyof typeof real_currency;

    @Field(() => Float, {nullable:false})
    transaction_amount!: number;

    @Field(() => game_currency, {nullable:false})
    game_currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    game_amount!: number;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => String, {nullable:false})
    player_remarks!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => String, {nullable:false})
    processed_by!: string;

    @Field(() => Date, {nullable:true})
    process_time?: Date | string;

    @Field(() => wallet_transaction_status, {nullable:true})
    status?: keyof typeof wallet_transaction_status;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => playersCreateNestedOneWithoutWithdrawal_transactionsInput, {nullable:false})
    players!: playersCreateNestedOneWithoutWithdrawal_transactionsInput;

    @Field(() => player_bank_accountsCreateNestedOneWithoutWithdrawal_transactionsInput, {nullable:false})
    player_bank_account!: player_bank_accountsCreateNestedOneWithoutWithdrawal_transactionsInput;
}
