import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { real_currency } from '../prisma/real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from '../prisma/game-currency.enum';
import { wallet_transaction_status } from '../prisma/wallet-transaction-status.enum';
import { playersUpdateOneRequiredWithoutDeposit_transactionsNestedInput } from '../players/players-update-one-required-without-deposit-transactions-nested.input';
import { adminsUpdateOneWithoutDeposit_transactionsNestedInput } from '../admins/admins-update-one-without-deposit-transactions-nested.input';

@InputType()
export class deposit_transactionsUpdateWithoutAdmin_bank_accountInput {

    @Field(() => String, {nullable:true})
    deposit_transaction_id?: string;

    @Field(() => real_currency, {nullable:true})
    transaction_currency?: keyof typeof real_currency;

    @Field(() => Float, {nullable:true})
    transaction_amount?: number;

    @Field(() => game_currency, {nullable:true})
    game_currency?: keyof typeof game_currency;

    @Field(() => Float, {nullable:true})
    game_amount?: number;

    @Field(() => String, {nullable:true})
    transaction_date?: string;

    @Field(() => String, {nullable:true})
    player_remarks?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    process_time?: Date | string;

    @Field(() => wallet_transaction_status, {nullable:true})
    status?: keyof typeof wallet_transaction_status;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => playersUpdateOneRequiredWithoutDeposit_transactionsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutDeposit_transactionsNestedInput;

    @Field(() => adminsUpdateOneWithoutDeposit_transactionsNestedInput, {nullable:true})
    processed_by_admin?: adminsUpdateOneWithoutDeposit_transactionsNestedInput;
}
