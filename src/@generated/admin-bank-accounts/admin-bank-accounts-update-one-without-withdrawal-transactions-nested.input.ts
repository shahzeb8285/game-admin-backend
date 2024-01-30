import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_bank_accountsCreateWithoutWithdrawal_transactionsInput } from './admin-bank-accounts-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput } from './admin-bank-accounts-create-or-connect-without-withdrawal-transactions.input';
import { admin_bank_accountsUpsertWithoutWithdrawal_transactionsInput } from './admin-bank-accounts-upsert-without-withdrawal-transactions.input';
import { admin_bank_accountsWhereInput } from './admin-bank-accounts-where.input';
import { admin_bank_accountsWhereUniqueInput } from './admin-bank-accounts-where-unique.input';
import { admin_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput } from './admin-bank-accounts-update-to-one-with-where-without-withdrawal-transactions.input';

@InputType()
export class admin_bank_accountsUpdateOneWithoutWithdrawal_transactionsNestedInput {

    @Field(() => admin_bank_accountsCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsCreateWithoutWithdrawal_transactionsInput)
    create?: admin_bank_accountsCreateWithoutWithdrawal_transactionsInput;

    @Field(() => admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: admin_bank_accountsCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => admin_bank_accountsUpsertWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsUpsertWithoutWithdrawal_transactionsInput)
    upsert?: admin_bank_accountsUpsertWithoutWithdrawal_transactionsInput;

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereInput)
    disconnect?: admin_bank_accountsWhereInput;

    @Field(() => admin_bank_accountsWhereInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereInput)
    delete?: admin_bank_accountsWhereInput;

    @Field(() => admin_bank_accountsWhereUniqueInput, {nullable:true})
    @Type(() => admin_bank_accountsWhereUniqueInput)
    connect?: admin_bank_accountsWhereUniqueInput;

    @Field(() => admin_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => admin_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput)
    update?: admin_bank_accountsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput;
}
