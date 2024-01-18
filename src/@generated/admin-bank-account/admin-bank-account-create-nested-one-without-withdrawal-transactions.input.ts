import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountCreateWithoutWithdrawal_transactionsInput } from './admin-bank-account-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput } from './admin-bank-account-create-or-connect-without-withdrawal-transactions.input';
import { AdminBankAccountWhereUniqueInput } from './admin-bank-account-where-unique.input';

@InputType()
export class AdminBankAccountCreateNestedOneWithoutWithdrawal_transactionsInput {

    @Field(() => AdminBankAccountCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountCreateWithoutWithdrawal_transactionsInput)
    create?: AdminBankAccountCreateWithoutWithdrawal_transactionsInput;

    @Field(() => AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: AdminBankAccountCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => AdminBankAccountWhereUniqueInput, {nullable:true})
    @Type(() => AdminBankAccountWhereUniqueInput)
    connect?: AdminBankAccountWhereUniqueInput;
}
