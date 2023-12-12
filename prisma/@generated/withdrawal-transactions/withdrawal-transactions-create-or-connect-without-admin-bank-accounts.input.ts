import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-create-without-admin-bank-accounts.input';

@InputType()
export class withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: Prisma.AtLeast<withdrawal_transactionsWhereUniqueInput, 'withdrawal_transaction_id'>;

    @Field(() => withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput)
    create!: withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput;
}
