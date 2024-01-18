import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';
import { Type } from 'class-transformer';
import { AdminBankAccountUpdateWithoutDeposit_transactionsInput } from './admin-bank-account-update-without-deposit-transactions.input';

@InputType()
export class AdminBankAccountUpdateToOneWithWhereWithoutDeposit_transactionsInput {

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    @Type(() => AdminBankAccountWhereInput)
    where?: AdminBankAccountWhereInput;

    @Field(() => AdminBankAccountUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => AdminBankAccountUpdateWithoutDeposit_transactionsInput)
    data!: AdminBankAccountUpdateWithoutDeposit_transactionsInput;
}
