import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountUpdateWithoutDeposit_transactionsInput } from './admin-bank-account-update-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateWithoutDeposit_transactionsInput } from './admin-bank-account-create-without-deposit-transactions.input';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';

@InputType()
export class AdminBankAccountUpsertWithoutDeposit_transactionsInput {

    @Field(() => AdminBankAccountUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountUpdateWithoutDeposit_transactionsInput)
    update!: AdminBankAccountUpdateWithoutDeposit_transactionsInput;

    @Field(() => AdminBankAccountCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountCreateWithoutDeposit_transactionsInput)
    create!: AdminBankAccountCreateWithoutDeposit_transactionsInput;

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    @Type(() => AdminBankAccountWhereInput)
    where?: AdminBankAccountWhereInput;
}
