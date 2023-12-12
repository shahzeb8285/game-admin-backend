import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_bank_accountsWhereInput } from './admin-bank-accounts-where.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsUpdateWithoutWithdrawal_transactionsInput } from './admin-bank-accounts-update-without-withdrawal-transactions.input';

@InputType()
export class admin_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput {

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereInput)
    where?: admin_bank_accountsWhereInput;

    @Field(() => admin_bank_accountsUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => admin_bank_accountsUpdateWithoutWithdrawal_transactionsInput)
    data!: admin_bank_accountsUpdateWithoutWithdrawal_transactionsInput;
}
