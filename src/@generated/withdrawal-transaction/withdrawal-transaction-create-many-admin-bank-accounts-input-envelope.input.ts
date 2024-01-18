import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateManyAdmin_bank_accountsInput } from './withdrawal-transaction-create-many-admin-bank-accounts.input';
import { Type } from 'class-transformer';

@InputType()
export class WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope {

    @Field(() => [WithdrawalTransactionCreateManyAdmin_bank_accountsInput], {nullable:false})
    @Type(() => WithdrawalTransactionCreateManyAdmin_bank_accountsInput)
    data!: Array<WithdrawalTransactionCreateManyAdmin_bank_accountsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
