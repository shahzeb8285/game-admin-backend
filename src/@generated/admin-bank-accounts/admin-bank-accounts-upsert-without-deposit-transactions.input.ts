import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_bank_accountsUpdateWithoutDeposit_transactionsInput } from './admin-bank-accounts-update-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsCreateWithoutDeposit_transactionsInput } from './admin-bank-accounts-create-without-deposit-transactions.input';
import { admin_bank_accountsWhereInput } from './admin-bank-accounts-where.input';

@InputType()
export class admin_bank_accountsUpsertWithoutDeposit_transactionsInput {

    @Field(() => admin_bank_accountsUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => admin_bank_accountsUpdateWithoutDeposit_transactionsInput)
    update!: admin_bank_accountsUpdateWithoutDeposit_transactionsInput;

    @Field(() => admin_bank_accountsCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => admin_bank_accountsCreateWithoutDeposit_transactionsInput)
    create!: admin_bank_accountsCreateWithoutDeposit_transactionsInput;

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereInput)
    where?: admin_bank_accountsWhereInput;
}
