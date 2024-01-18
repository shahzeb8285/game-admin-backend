import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput } from '../deposit-transaction/deposit-transaction-unchecked-update-many-without-admin-bank-accounts-nested.input';

@InputType()
export class AdminBankAccountUncheckedUpdateWithoutWithdrawal_transactionsInput {

    @Field(() => String, {nullable:true})
    admin_bank_account_id?: string;

    @Field(() => String, {nullable:true})
    bank_name?: string;

    @Field(() => String, {nullable:true})
    account_number?: string;

    @Field(() => String, {nullable:true})
    holder_name?: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:true})
    method?: string;

    @Field(() => DepositTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput, {nullable:true})
    deposit_transactions?: DepositTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput;
}
