import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountUpdateWithoutWithdrawal_transactionsInput } from './admin-bank-account-update-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateWithoutWithdrawal_transactionsInput } from './admin-bank-account-create-without-withdrawal-transactions.input';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';

@InputType()
export class AdminBankAccountUpsertWithoutWithdrawal_transactionsInput {

    @Field(() => AdminBankAccountUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountUpdateWithoutWithdrawal_transactionsInput)
    update!: AdminBankAccountUpdateWithoutWithdrawal_transactionsInput;

    @Field(() => AdminBankAccountCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountCreateWithoutWithdrawal_transactionsInput)
    create!: AdminBankAccountCreateWithoutWithdrawal_transactionsInput;

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    @Type(() => AdminBankAccountWhereInput)
    where?: AdminBankAccountWhereInput;
}
