import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateWithoutAdmin_bank_accountsInput } from './deposit-transactions-create-without-admin-bank-accounts.input';

@InputType()
export class deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: Prisma.AtLeast<deposit_transactionsWhereUniqueInput, 'deposit_transaction_id'>;

    @Field(() => deposit_transactionsCreateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => deposit_transactionsCreateWithoutAdmin_bank_accountsInput)
    create!: deposit_transactionsCreateWithoutAdmin_bank_accountsInput;
}
