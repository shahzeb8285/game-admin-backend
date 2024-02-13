import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereInput } from '../transfer-in-transactions/transfer-in-transactions-where.input';

@InputType()
export class Transfer_in_transactionsListRelationFilter {

    @Field(() => transfer_in_transactionsWhereInput, {nullable:true})
    every?: transfer_in_transactionsWhereInput;

    @Field(() => transfer_in_transactionsWhereInput, {nullable:true})
    some?: transfer_in_transactionsWhereInput;

    @Field(() => transfer_in_transactionsWhereInput, {nullable:true})
    none?: transfer_in_transactionsWhereInput;
}
