import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateNestedManyWithoutAdmin_bank_accountsInput } from '../withdrawal-transaction/withdrawal-transaction-create-nested-many-without-admin-bank-accounts.input';

@InputType()
export class AdminBankAccountCreateWithoutDeposit_transactionsInput {

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

    @Field(() => WithdrawalTransactionCreateNestedManyWithoutAdmin_bank_accountsInput, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionCreateNestedManyWithoutAdmin_bank_accountsInput;
}
