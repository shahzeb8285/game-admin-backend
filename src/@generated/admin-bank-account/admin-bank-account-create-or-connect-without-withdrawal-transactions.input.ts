import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateWithoutWithdrawal_transactionsInput } from './admin-bank-account-create-without-withdrawal-transactions.input';

@InputType()
export class AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput {

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:false})
    @Type(() => AdminBankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<AdminBankAccountWhereUniqueInput, 'admin_bank_account_id'>;

    @Field(() => AdminBankAccountCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountCreateWithoutWithdrawal_transactionsInput)
    create!: AdminBankAccountCreateWithoutWithdrawal_transactionsInput;
}
