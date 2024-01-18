import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { DepositTransactionCreateWithoutAdmin_bank_accountsInput } from './deposit-transaction-create-without-admin-bank-accounts.input';

@InputType()
export class DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput {

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<DepositTransactionWhereUniqueInput, 'deposit_transaction_id'>;

    @Field(() => DepositTransactionCreateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => DepositTransactionCreateWithoutAdmin_bank_accountsInput)
    create!: DepositTransactionCreateWithoutAdmin_bank_accountsInput;
}
