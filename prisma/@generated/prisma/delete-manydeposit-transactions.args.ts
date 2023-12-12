import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsWhereInput } from '../deposit-transactions/deposit-transactions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydepositTransactionsArgs {

    @Field(() => deposit_transactionsWhereInput, {nullable:true})
    @Type(() => deposit_transactionsWhereInput)
    where?: deposit_transactionsWhereInput;
}
