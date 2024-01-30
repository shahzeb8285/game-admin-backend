import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsCreateInput } from '../deposit-transactions/deposit-transactions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedepositTransactionsArgs {

    @Field(() => deposit_transactionsCreateInput, {nullable:false})
    @Type(() => deposit_transactionsCreateInput)
    data!: deposit_transactionsCreateInput;
}
