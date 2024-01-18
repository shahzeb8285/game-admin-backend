import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { DepositTransactionUpdateWithoutAdmin_bank_accountsInput } from './deposit-transaction-update-without-admin-bank-accounts.input';
import { DepositTransactionCreateWithoutAdmin_bank_accountsInput } from './deposit-transaction-create-without-admin-bank-accounts.input';

@InputType()
export class DepositTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput {

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: DepositTransactionWhereUniqueInput;

    @Field(() => DepositTransactionUpdateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => DepositTransactionUpdateWithoutAdmin_bank_accountsInput)
    update!: DepositTransactionUpdateWithoutAdmin_bank_accountsInput;

    @Field(() => DepositTransactionCreateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => DepositTransactionCreateWithoutAdmin_bank_accountsInput)
    create!: DepositTransactionCreateWithoutAdmin_bank_accountsInput;
}
