import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_bank_accountsCreateWithoutWithdrawal_transactionsInput } from './admin-bank-accounts-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput } from './admin-bank-accounts-create-or-connect-without-withdrawal-transactions.input';
import { Prisma } from '@prisma/client';
import { admin_bank_accountsWhereUniqueInput } from './admin-bank-accounts-where-unique.input';

@InputType()
export class admin_bank_accountsCreateNestedOneWithoutWithdrawal_transactionsInput {

    @Field(() => admin_bank_accountsCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsCreateWithoutWithdrawal_transactionsInput)
    create?: admin_bank_accountsCreateWithoutWithdrawal_transactionsInput;

    @Field(() => admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereUniqueInput)
    connect?: Prisma.AtLeast<admin_bank_accountsWhereUniqueInput, 'admin_bank_account_id'>;
}
