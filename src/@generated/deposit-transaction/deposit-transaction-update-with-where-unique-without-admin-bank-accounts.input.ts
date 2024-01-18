import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { DepositTransactionUpdateWithoutAdmin_bank_accountsInput } from './deposit-transaction-update-without-admin-bank-accounts.input';

@InputType()
export class DepositTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput {

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<DepositTransactionWhereUniqueInput, 'deposit_transaction_id'>;

    @Field(() => DepositTransactionUpdateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => DepositTransactionUpdateWithoutAdmin_bank_accountsInput)
    data!: DepositTransactionUpdateWithoutAdmin_bank_accountsInput;
}
