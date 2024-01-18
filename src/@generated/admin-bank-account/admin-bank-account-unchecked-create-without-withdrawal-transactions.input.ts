import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput } from '../deposit-transaction/deposit-transaction-unchecked-create-nested-many-without-admin-bank-accounts.input';

@InputType()
export class AdminBankAccountUncheckedCreateWithoutWithdrawal_transactionsInput {

    @Field(() => String, {nullable:true})
    admin_bank_account_id?: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => DepositTransactionUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput, {nullable:true})
    deposit_transactions?: DepositTransactionUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput;
}
