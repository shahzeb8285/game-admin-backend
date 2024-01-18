import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountCreateWithoutWithdrawal_transactionsInput } from './admin-bank-account-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput } from './admin-bank-account-create-or-connect-without-withdrawal-transactions.input';
import { AdminBankAccountUpsertWithoutWithdrawal_transactionsInput } from './admin-bank-account-upsert-without-withdrawal-transactions.input';
import { Prisma } from '@prisma/client';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { AdminBankAccountUpdateToOneWithWhereWithoutWithdrawal_transactionsInput } from './admin-bank-account-update-to-one-with-where-without-withdrawal-transactions.input';

@InputType()
export class AdminBankAccountUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput {

    @Field(() => AdminBankAccountCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountCreateWithoutWithdrawal_transactionsInput)
    create?: AdminBankAccountCreateWithoutWithdrawal_transactionsInput;

    @Field(() => AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => AdminBankAccountUpsertWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountUpsertWithoutWithdrawal_transactionsInput)
    upsert?: AdminBankAccountUpsertWithoutWithdrawal_transactionsInput;

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:true})
    @Type(() => AdminBankAccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AdminBankAccountWhereUniqueInput, 'admin_bank_account_id'>;

    @Field(() => AdminBankAccountUpdateToOneWithWhereWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountUpdateToOneWithWhereWithoutWithdrawal_transactionsInput)
    update?: AdminBankAccountUpdateToOneWithWhereWithoutWithdrawal_transactionsInput;
}
