import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionUpdateWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-update-without-admin-bank-accounts.input';

@InputType()
export class WithdrawalTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput {

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawalTransactionWhereUniqueInput, 'withdrawal_transaction_id'>;

    @Field(() => WithdrawalTransactionUpdateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => WithdrawalTransactionUpdateWithoutAdmin_bank_accountsInput)
    data!: WithdrawalTransactionUpdateWithoutAdmin_bank_accountsInput;
}