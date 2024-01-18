import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionUpdateWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-update-without-admin-bank-accounts.input';
import { WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-create-without-admin-bank-accounts.input';

@InputType()
export class WithdrawalTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput {

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: WithdrawalTransactionWhereUniqueInput;

    @Field(() => WithdrawalTransactionUpdateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => WithdrawalTransactionUpdateWithoutAdmin_bank_accountsInput)
    update!: WithdrawalTransactionUpdateWithoutAdmin_bank_accountsInput;

    @Field(() => WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput)
    create!: WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput;
}
