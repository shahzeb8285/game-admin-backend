import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsUpdateWithoutAdmin_bank_accountInput } from './deposit-transactions-update-without-admin-bank-account.input';

@InputType()
export class deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountInput {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;

    @Field(() => deposit_transactionsUpdateWithoutAdmin_bank_accountInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateWithoutAdmin_bank_accountInput)
    data!: deposit_transactionsUpdateWithoutAdmin_bank_accountInput;
}
