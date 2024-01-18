import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { admin_bank_accountsCreateNestedOneWithoutWithdrawal_transactionsInput } from '../admin-bank-accounts/admin-bank-accounts-create-nested-one-without-withdrawal-transactions.input';

@InputType()
export class withdrawal_transactionsCreateWithoutPlayersInput {

    @Field(() => String, {nullable:true})
    withdrawal_transaction_id?: string;

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

    @Field(() => admin_bank_accountsCreateNestedOneWithoutWithdrawal_transactionsInput, {nullable:false})
    admin_bank_accounts!: admin_bank_accountsCreateNestedOneWithoutWithdrawal_transactionsInput;
}
