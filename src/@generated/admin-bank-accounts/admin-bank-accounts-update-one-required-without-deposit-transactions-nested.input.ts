import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_bank_accountsCreateWithoutDeposit_transactionsInput } from './admin-bank-accounts-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsCreateOrConnectWithoutDeposit_transactionsInput } from './admin-bank-accounts-create-or-connect-without-deposit-transactions.input';
import { admin_bank_accountsUpsertWithoutDeposit_transactionsInput } from './admin-bank-accounts-upsert-without-deposit-transactions.input';
import { admin_bank_accountsWhereUniqueInput } from './admin-bank-accounts-where-unique.input';
import { admin_bank_accountsUpdateToOneWithWhereWithoutDeposit_transactionsInput } from './admin-bank-accounts-update-to-one-with-where-without-deposit-transactions.input';

@InputType()
export class admin_bank_accountsUpdateOneRequiredWithoutDeposit_transactionsNestedInput {

    @Field(() => admin_bank_accountsCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsCreateWithoutDeposit_transactionsInput)
    create?: admin_bank_accountsCreateWithoutDeposit_transactionsInput;

    @Field(() => admin_bank_accountsCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: admin_bank_accountsCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => admin_bank_accountsUpsertWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsUpsertWithoutDeposit_transactionsInput)
    upsert?: admin_bank_accountsUpsertWithoutDeposit_transactionsInput;

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereUniqueInput)
    connect?: admin_bank_accountsWhereUniqueInput;

    @Field(() => admin_bank_accountsUpdateToOneWithWhereWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsUpdateToOneWithWhereWithoutDeposit_transactionsInput)
    update?: admin_bank_accountsUpdateToOneWithWhereWithoutDeposit_transactionsInput;
}
