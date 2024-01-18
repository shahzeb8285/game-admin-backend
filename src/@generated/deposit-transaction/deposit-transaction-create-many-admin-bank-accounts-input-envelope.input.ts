import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionCreateManyAdmin_bank_accountsInput } from './deposit-transaction-create-many-admin-bank-accounts.input';
import { Type } from 'class-transformer';

@InputType()
export class DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope {

    @Field(() => [DepositTransactionCreateManyAdmin_bank_accountsInput], {nullable:false})
    @Type(() => DepositTransactionCreateManyAdmin_bank_accountsInput)
    data!: Array<DepositTransactionCreateManyAdmin_bank_accountsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
