import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateWithoutAdmin_bank_accountInput } from './deposit-transactions-create-without-admin-bank-account.input';

@InputType()
export class deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;

    @Field(() => deposit_transactionsCreateWithoutAdmin_bank_accountInput, {nullable:false})
    @Type(() => deposit_transactionsCreateWithoutAdmin_bank_accountInput)
    create!: deposit_transactionsCreateWithoutAdmin_bank_accountInput;
}
