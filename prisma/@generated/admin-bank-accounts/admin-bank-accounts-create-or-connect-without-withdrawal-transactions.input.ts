import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { admin_bank_accountsWhereUniqueInput } from './admin-bank-accounts-where-unique.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsCreateWithoutWithdrawal_transactionsInput } from './admin-bank-accounts-create-without-withdrawal-transactions.input';

@InputType()
export class admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput {

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => admin_bank_accountsWhereUniqueInput)
    where!: Prisma.AtLeast<admin_bank_accountsWhereUniqueInput, 'admin_bank_account_id'>;

    @Field(() => admin_bank_accountsCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => admin_bank_accountsCreateWithoutWithdrawal_transactionsInput)
    create!: admin_bank_accountsCreateWithoutWithdrawal_transactionsInput;
}
