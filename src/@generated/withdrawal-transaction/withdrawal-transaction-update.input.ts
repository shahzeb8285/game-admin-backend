import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { PlayerUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput } from '../player/player-update-one-required-without-withdrawal-transactions-nested.input';
import { AdminBankAccountUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput } from '../admin-bank-account/admin-bank-account-update-one-required-without-withdrawal-transactions-nested.input';

@InputType()
export class WithdrawalTransactionUpdateInput {

    @Field(() => String, {nullable:true})
    withdrawal_transaction_id?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => Date, {nullable:true})
    request_time?: Date | string;

    @Field(() => Date, {nullable:true})
    process_time?: Date | string;

    @Field(() => String, {nullable:true})
    processed_by?: string;

    @Field(() => String, {nullable:true})
    transaction_date?: string;

    @Field(() => TransactionType, {nullable:true})
    status?: keyof typeof TransactionType;

    @Field(() => PlayerUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput, {nullable:true})
    players?: PlayerUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput;

    @Field(() => AdminBankAccountUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput, {nullable:true})
    admin_bank_accounts?: AdminBankAccountUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput;
}
