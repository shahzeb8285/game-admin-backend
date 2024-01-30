import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereInput } from '../withdrawal-transactions/withdrawal-transactions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManywithdrawalTransactionsArgs {

    @Field(() => withdrawal_transactionsWhereInput, {nullable:true})
    @Type(() => withdrawal_transactionsWhereInput)
    where?: withdrawal_transactionsWhereInput;
}
