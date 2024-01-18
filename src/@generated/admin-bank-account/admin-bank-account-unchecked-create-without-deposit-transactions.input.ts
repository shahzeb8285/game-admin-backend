import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput } from '../withdrawal-transaction/withdrawal-transaction-unchecked-create-nested-many-without-admin-bank-accounts.input';

@InputType()
export class AdminBankAccountUncheckedCreateWithoutDeposit_transactionsInput {

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

    @Field(() => WithdrawalTransactionUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput;
}