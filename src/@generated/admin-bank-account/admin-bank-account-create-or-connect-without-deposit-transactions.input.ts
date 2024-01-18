import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateWithoutDeposit_transactionsInput } from './admin-bank-account-create-without-deposit-transactions.input';

@InputType()
export class AdminBankAccountCreateOrConnectWithoutDeposit_transactionsInput {

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:false})
    @Type(() => AdminBankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<AdminBankAccountWhereUniqueInput, 'admin_bank_account_id'>;

    @Field(() => AdminBankAccountCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountCreateWithoutDeposit_transactionsInput)
    create!: AdminBankAccountCreateWithoutDeposit_transactionsInput;
}
