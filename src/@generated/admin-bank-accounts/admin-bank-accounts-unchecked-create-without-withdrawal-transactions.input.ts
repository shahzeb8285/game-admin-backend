import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from '../prisma/bank-method.enum';
import { deposit_transactionsUncheckedCreateNestedManyWithoutAdmin_bank_accountInput } from '../deposit-transactions/deposit-transactions-unchecked-create-nested-many-without-admin-bank-account.input';

@InputType()
export class admin_bank_accountsUncheckedCreateWithoutWithdrawal_transactionsInput {

    @Field(() => String, {nullable:true})
    admin_bank_account_id?: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => bank_method, {nullable:false})
    method!: keyof typeof bank_method;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => deposit_transactionsUncheckedCreateNestedManyWithoutAdmin_bank_accountInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUncheckedCreateNestedManyWithoutAdmin_bank_accountInput;
}
