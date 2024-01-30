import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsUpdateInput } from '../deposit-transactions/deposit-transactions-update.input';
import { Type } from 'class-transformer';
import { deposit_transactionsWhereUniqueInput } from '../deposit-transactions/deposit-transactions-where-unique.input';

@ArgsType()
export class UpdateOnedepositTransactionsArgs {

    @Field(() => deposit_transactionsUpdateInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateInput)
    data!: deposit_transactionsUpdateInput;

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;
}
