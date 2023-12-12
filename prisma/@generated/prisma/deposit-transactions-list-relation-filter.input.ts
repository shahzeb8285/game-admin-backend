import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereInput } from '../deposit-transactions/deposit-transactions-where.input';

@InputType()
export class Deposit_transactionsListRelationFilter {

    @Field(() => deposit_transactionsWhereInput, {nullable:true})
    every?: deposit_transactionsWhereInput;

    @Field(() => deposit_transactionsWhereInput, {nullable:true})
    some?: deposit_transactionsWhereInput;

    @Field(() => deposit_transactionsWhereInput, {nullable:true})
    none?: deposit_transactionsWhereInput;
}
