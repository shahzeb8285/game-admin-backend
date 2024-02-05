import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsUpdateInput } from '../rebate-transactions/rebate-transactions-update.input';
import { Type } from 'class-transformer';
import { rebate_transactionsWhereUniqueInput } from '../rebate-transactions/rebate-transactions-where-unique.input';

@ArgsType()
export class UpdateOnerebateTransactionsArgs {

    @Field(() => rebate_transactionsUpdateInput, {nullable:false})
    @Type(() => rebate_transactionsUpdateInput)
    data!: rebate_transactionsUpdateInput;

    @Field(() => rebate_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => rebate_transactionsWhereUniqueInput)
    where!: rebate_transactionsWhereUniqueInput;
}
