import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateManyAdmin_bank_accountsInput } from './withdrawal-transactions-create-many-admin-bank-accounts.input';
import { Type } from 'class-transformer';

@InputType()
export class withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope {

    @Field(() => [withdrawal_transactionsCreateManyAdmin_bank_accountsInput], {nullable:false})
    @Type(() => withdrawal_transactionsCreateManyAdmin_bank_accountsInput)
    data!: Array<withdrawal_transactionsCreateManyAdmin_bank_accountsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
