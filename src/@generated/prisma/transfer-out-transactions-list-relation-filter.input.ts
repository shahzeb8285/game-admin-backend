import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereInput } from '../transfer-out-transactions/transfer-out-transactions-where.input';

@InputType()
export class Transfer_out_transactionsListRelationFilter {

    @Field(() => transfer_out_transactionsWhereInput, {nullable:true})
    every?: transfer_out_transactionsWhereInput;

    @Field(() => transfer_out_transactionsWhereInput, {nullable:true})
    some?: transfer_out_transactionsWhereInput;

    @Field(() => transfer_out_transactionsWhereInput, {nullable:true})
    none?: transfer_out_transactionsWhereInput;
}
