import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsWhereInput } from '../rebate-transactions/rebate-transactions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyrebateTransactionsArgs {

    @Field(() => rebate_transactionsWhereInput, {nullable:true})
    @Type(() => rebate_transactionsWhereInput)
    where?: rebate_transactionsWhereInput;
}
