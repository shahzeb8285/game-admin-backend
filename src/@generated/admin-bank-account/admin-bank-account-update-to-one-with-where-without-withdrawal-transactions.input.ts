import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';
import { Type } from 'class-transformer';
import { AdminBankAccountUpdateWithoutWithdrawal_transactionsInput } from './admin-bank-account-update-without-withdrawal-transactions.input';

@InputType()
export class AdminBankAccountUpdateToOneWithWhereWithoutWithdrawal_transactionsInput {

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    @Type(() => AdminBankAccountWhereInput)
    where?: AdminBankAccountWhereInput;

    @Field(() => AdminBankAccountUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountUpdateWithoutWithdrawal_transactionsInput)
    data!: AdminBankAccountUpdateWithoutWithdrawal_transactionsInput;
}
