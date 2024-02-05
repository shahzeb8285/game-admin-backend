import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsWhereUniqueInput } from '../rebate-transactions/rebate-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { rebate_transactionsCreateInput } from '../rebate-transactions/rebate-transactions-create.input';
import { rebate_transactionsUpdateInput } from '../rebate-transactions/rebate-transactions-update.input';

@ArgsType()
export class UpsertOnerebateTransactionsArgs {

    @Field(() => rebate_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => rebate_transactionsWhereUniqueInput)
    where!: rebate_transactionsWhereUniqueInput;

    @Field(() => rebate_transactionsCreateInput, {nullable:false})
    @Type(() => rebate_transactionsCreateInput)
    create!: rebate_transactionsCreateInput;

    @Field(() => rebate_transactionsUpdateInput, {nullable:false})
    @Type(() => rebate_transactionsUpdateInput)
    update!: rebate_transactionsUpdateInput;
}
