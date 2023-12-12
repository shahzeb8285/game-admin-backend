import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereUniqueInput } from '../withdrawal-transactions/withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnewithdrawalTransactionsArgs {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: withdrawal_transactionsWhereUniqueInput;
}
