import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_bank_accountsCreateWithoutDeposit_transactionsInput } from './admin-bank-accounts-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsCreateOrConnectWithoutDeposit_transactionsInput } from './admin-bank-accounts-create-or-connect-without-deposit-transactions.input';
import { Prisma } from '@prisma/client';
import { admin_bank_accountsWhereUniqueInput } from './admin-bank-accounts-where-unique.input';

@InputType()
export class admin_bank_accountsCreateNestedOneWithoutDeposit_transactionsInput {

    @Field(() => admin_bank_accountsCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsCreateWithoutDeposit_transactionsInput)
    create?: admin_bank_accountsCreateWithoutDeposit_transactionsInput;

    @Field(() => admin_bank_accountsCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: admin_bank_accountsCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereUniqueInput)
    connect?: Prisma.AtLeast<admin_bank_accountsWhereUniqueInput, 'admin_bank_account_id'>;
}
