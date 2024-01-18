import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountCreateWithoutDeposit_transactionsInput } from './admin-bank-account-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateOrConnectWithoutDeposit_transactionsInput } from './admin-bank-account-create-or-connect-without-deposit-transactions.input';
import { AdminBankAccountUpsertWithoutDeposit_transactionsInput } from './admin-bank-account-upsert-without-deposit-transactions.input';
import { Prisma } from '@prisma/client';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';
import { AdminBankAccountUpdateToOneWithWhereWithoutDeposit_transactionsInput } from './admin-bank-account-update-to-one-with-where-without-deposit-transactions.input';

@InputType()
export class AdminBankAccountUpdateOneRequiredWithoutDeposit_transactionsNestedInput {

    @Field(() => AdminBankAccountCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountCreateWithoutDeposit_transactionsInput)
    create?: AdminBankAccountCreateWithoutDeposit_transactionsInput;

    @Field(() => AdminBankAccountCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: AdminBankAccountCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => AdminBankAccountUpsertWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountUpsertWithoutDeposit_transactionsInput)
    upsert?: AdminBankAccountUpsertWithoutDeposit_transactionsInput;

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:true})
    @Type(() => AdminBankAccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AdminBankAccountWhereUniqueInput, 'admin_bank_account_id'>;

    @Field(() => AdminBankAccountUpdateToOneWithWhereWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountUpdateToOneWithWhereWithoutDeposit_transactionsInput)
    update?: AdminBankAccountUpdateToOneWithWhereWithoutDeposit_transactionsInput;
}
