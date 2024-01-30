import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from '../prisma/bank-method.enum';
import { deposit_transactionsUpdateManyWithoutAdmin_bank_accountNestedInput } from '../deposit-transactions/deposit-transactions-update-many-without-admin-bank-account-nested.input';
import { withdrawal_transactionsUpdateManyWithoutAdmin_bank_accountsNestedInput } from '../withdrawal-transactions/withdrawal-transactions-update-many-without-admin-bank-accounts-nested.input';

@InputType()
export class admin_bank_accountsUpdateInput {

    @Field(() => String, {nullable:true})
    admin_bank_account_id?: string;

    @Field(() => String, {nullable:true})
    bank_name?: string;

    @Field(() => String, {nullable:true})
    account_number?: string;

    @Field(() => String, {nullable:true})
    holder_name?: string;

    @Field(() => bank_method, {nullable:true})
    method?: keyof typeof bank_method;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => deposit_transactionsUpdateManyWithoutAdmin_bank_accountNestedInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUpdateManyWithoutAdmin_bank_accountNestedInput;

    @Field(() => withdrawal_transactionsUpdateManyWithoutAdmin_bank_accountsNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUpdateManyWithoutAdmin_bank_accountsNestedInput;
}
