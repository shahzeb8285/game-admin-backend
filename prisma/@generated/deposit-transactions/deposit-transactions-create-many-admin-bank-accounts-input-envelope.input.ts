import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateManyAdmin_bank_accountsInput } from './deposit-transactions-create-many-admin-bank-accounts.input';
import { Type } from 'class-transformer';

@InputType()
export class deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope {

    @Field(() => [deposit_transactionsCreateManyAdmin_bank_accountsInput], {nullable:false})
    @Type(() => deposit_transactionsCreateManyAdmin_bank_accountsInput)
    data!: Array<deposit_transactionsCreateManyAdmin_bank_accountsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
