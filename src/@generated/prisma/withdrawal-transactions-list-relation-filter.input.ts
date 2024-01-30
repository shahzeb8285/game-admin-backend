import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereInput } from '../withdrawal-transactions/withdrawal-transactions-where.input';

@InputType()
export class Withdrawal_transactionsListRelationFilter {

    @Field(() => withdrawal_transactionsWhereInput, {nullable:true})
    every?: withdrawal_transactionsWhereInput;

    @Field(() => withdrawal_transactionsWhereInput, {nullable:true})
    some?: withdrawal_transactionsWhereInput;

    @Field(() => withdrawal_transactionsWhereInput, {nullable:true})
    none?: withdrawal_transactionsWhereInput;
}
