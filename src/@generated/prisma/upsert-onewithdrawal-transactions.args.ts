import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereUniqueInput } from '../withdrawal-transactions/withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateInput } from '../withdrawal-transactions/withdrawal-transactions-create.input';
import { withdrawal_transactionsUpdateInput } from '../withdrawal-transactions/withdrawal-transactions-update.input';

@ArgsType()
export class UpsertOnewithdrawalTransactionsArgs {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: withdrawal_transactionsWhereUniqueInput;

    @Field(() => withdrawal_transactionsCreateInput, {nullable:false})
    @Type(() => withdrawal_transactionsCreateInput)
    create!: withdrawal_transactionsCreateInput;

    @Field(() => withdrawal_transactionsUpdateInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateInput)
    update!: withdrawal_transactionsUpdateInput;
}
