import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { PlayerCreateNestedOneWithoutDeposit_transactionsInput } from '../player/player-create-nested-one-without-deposit-transactions.input';
import { AdminBankAccountCreateNestedOneWithoutDeposit_transactionsInput } from '../admin-bank-account/admin-bank-account-create-nested-one-without-deposit-transactions.input';

@InputType()
export class DepositTransactionCreateInput {

    @Field(() => String, {nullable:true})
    deposit_transaction_id?: string;

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

    @Field(() => TransactionType, {nullable:true})
    status?: keyof typeof TransactionType;

    @Field(() => PlayerCreateNestedOneWithoutDeposit_transactionsInput, {nullable:false})
    players!: PlayerCreateNestedOneWithoutDeposit_transactionsInput;

    @Field(() => AdminBankAccountCreateNestedOneWithoutDeposit_transactionsInput, {nullable:false})
    admin_bank_accounts!: AdminBankAccountCreateNestedOneWithoutDeposit_transactionsInput;
}
