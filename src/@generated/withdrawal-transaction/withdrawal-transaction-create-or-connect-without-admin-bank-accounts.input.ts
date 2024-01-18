import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-create-without-admin-bank-accounts.input';

@InputType()
export class WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput {

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawalTransactionWhereUniqueInput, 'withdrawal_transaction_id'>;

    @Field(() => WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput)
    create!: WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput;
}
