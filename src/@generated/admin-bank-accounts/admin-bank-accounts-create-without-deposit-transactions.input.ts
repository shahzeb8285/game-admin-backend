import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateNestedManyWithoutAdmin_bank_accountsInput } from '../withdrawal-transactions/withdrawal-transactions-create-nested-many-without-admin-bank-accounts.input';

@InputType()
export class admin_bank_accountsCreateWithoutDeposit_transactionsInput {

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

    @Field(() => withdrawal_transactionsCreateNestedManyWithoutAdmin_bank_accountsInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsCreateNestedManyWithoutAdmin_bank_accountsInput;
}
