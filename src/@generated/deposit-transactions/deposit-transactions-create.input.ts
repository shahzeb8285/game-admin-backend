import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { real_currency } from '../prisma/real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from '../prisma/game-currency.enum';
import { wallet_transaction_status } from '../prisma/wallet-transaction-status.enum';
import { playersCreateNestedOneWithoutDeposit_transactionsInput } from '../players/players-create-nested-one-without-deposit-transactions.input';
import { admin_bank_accountsCreateNestedOneWithoutDeposit_transactionsInput } from '../admin-bank-accounts/admin-bank-accounts-create-nested-one-without-deposit-transactions.input';
import { adminsCreateNestedOneWithoutDeposit_transactionsInput } from '../admins/admins-create-nested-one-without-deposit-transactions.input';

@InputType()
export class deposit_transactionsCreateInput {

    @Field(() => String, {nullable:true})
    deposit_transaction_id?: string;

    @Field(() => real_currency, {nullable:false})
    transaction_currency!: keyof typeof real_currency;

    @Field(() => Float, {nullable:false})
    transaction_amount!: number;

    @Field(() => game_currency, {nullable:false})
    game_currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    game_amount!: number;

    @Field(() => Date, {nullable:false})
    trans_date!: Date | string;

    @Field(() => String, {nullable:false})
    player_remarks!: string;

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

    @Field(() => playersCreateNestedOneWithoutDeposit_transactionsInput, {nullable:false})
    players!: playersCreateNestedOneWithoutDeposit_transactionsInput;

    @Field(() => admin_bank_accountsCreateNestedOneWithoutDeposit_transactionsInput, {nullable:false})
    admin_bank_account!: admin_bank_accountsCreateNestedOneWithoutDeposit_transactionsInput;

    @Field(() => adminsCreateNestedOneWithoutDeposit_transactionsInput, {nullable:true})
    processed_by_admin?: adminsCreateNestedOneWithoutDeposit_transactionsInput;
}
