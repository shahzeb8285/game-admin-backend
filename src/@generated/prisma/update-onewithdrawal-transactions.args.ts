import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsUpdateInput } from '../withdrawal-transactions/withdrawal-transactions-update.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsWhereUniqueInput } from '../withdrawal-transactions/withdrawal-transactions-where-unique.input';

@ArgsType()
export class UpdateOnewithdrawalTransactionsArgs {

    @Field(() => withdrawal_transactionsUpdateInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateInput)
    data!: withdrawal_transactionsUpdateInput;

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: withdrawal_transactionsWhereUniqueInput;
}
