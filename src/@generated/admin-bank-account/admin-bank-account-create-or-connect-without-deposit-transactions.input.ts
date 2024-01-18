import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateWithoutDeposit_transactionsInput } from './admin-bank-account-create-without-deposit-transactions.input';

@InputType()
export class AdminBankAccountCreateOrConnectWithoutDeposit_transactionsInput {

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:false})
    @Type(() => AdminBankAccountWhereUniqueInput)
    where!: AdminBankAccountWhereUniqueInput;

    @Field(() => AdminBankAccountCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountCreateWithoutDeposit_transactionsInput)
    create!: AdminBankAccountCreateWithoutDeposit_transactionsInput;
}
