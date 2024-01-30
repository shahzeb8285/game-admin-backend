import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsWhereUniqueInput } from '../deposit-transactions/deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateInput } from '../deposit-transactions/deposit-transactions-create.input';
import { deposit_transactionsUpdateInput } from '../deposit-transactions/deposit-transactions-update.input';

@ArgsType()
export class UpsertOnedepositTransactionsArgs {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;

    @Field(() => deposit_transactionsCreateInput, {nullable:false})
    @Type(() => deposit_transactionsCreateInput)
    create!: deposit_transactionsCreateInput;

    @Field(() => deposit_transactionsUpdateInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateInput)
    update!: deposit_transactionsUpdateInput;
}
