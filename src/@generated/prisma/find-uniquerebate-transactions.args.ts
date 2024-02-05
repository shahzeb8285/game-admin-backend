import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsWhereUniqueInput } from '../rebate-transactions/rebate-transactions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquerebateTransactionsArgs {

    @Field(() => rebate_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => rebate_transactionsWhereUniqueInput)
    where!: rebate_transactionsWhereUniqueInput;
}
