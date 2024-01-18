import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsWhereUniqueInput } from '../deposit-transactions/deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedepositTransactionsArgs {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;
}
