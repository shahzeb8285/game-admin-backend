import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput } from '../withdrawal-transaction/withdrawal-transaction-unchecked-update-many-without-admin-bank-accounts-nested.input';

@InputType()
export class AdminBankAccountUncheckedUpdateWithoutDeposit_transactionsInput {

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

    @Field(() => WithdrawalTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput;
}
