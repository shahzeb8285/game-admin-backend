import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_transactionsWhereInput } from '../rebate-transactions/rebate-transactions-where.input';

@InputType()
export class Rebate_transactionsListRelationFilter {

    @Field(() => rebate_transactionsWhereInput, {nullable:true})
    every?: rebate_transactionsWhereInput;

    @Field(() => rebate_transactionsWhereInput, {nullable:true})
    some?: rebate_transactionsWhereInput;

    @Field(() => rebate_transactionsWhereInput, {nullable:true})
    none?: rebate_transactionsWhereInput;
}
