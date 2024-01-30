import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateManyAdmin_bank_accountInput } from './deposit-transactions-create-many-admin-bank-account.input';
import { Type } from 'class-transformer';

@InputType()
export class deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope {

    @Field(() => [deposit_transactionsCreateManyAdmin_bank_accountInput], {nullable:false})
    @Type(() => deposit_transactionsCreateManyAdmin_bank_accountInput)
    data!: Array<deposit_transactionsCreateManyAdmin_bank_accountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
