import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsUpdateWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-update-without-admin-bank-accounts.input';
import { withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-create-without-admin-bank-accounts.input';

@InputType()
export class withdrawal_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: withdrawal_transactionsWhereUniqueInput;

    @Field(() => withdrawal_transactionsUpdateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateWithoutAdmin_bank_accountsInput)
    update!: withdrawal_transactionsUpdateWithoutAdmin_bank_accountsInput;

    @Field(() => withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput, {nullable:false})
    @Type(() => withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput)
    create!: withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput;
}
