import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereInput } from '../transfer-in-transactions/transfer-in-transactions-where.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsOrderByWithAggregationInput } from '../transfer-in-transactions/transfer-in-transactions-order-by-with-aggregation.input';
import { Transfer_in_transactionsScalarFieldEnum } from './transfer-in-transactions-scalar-field.enum';
import { transfer_in_transactionsScalarWhereWithAggregatesInput } from '../transfer-in-transactions/transfer-in-transactions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBytransferInTransactionsArgs {

    @Field(() => transfer_in_transactionsWhereInput, {nullable:true})
    @Type(() => transfer_in_transactionsWhereInput)
    where?: transfer_in_transactionsWhereInput;

    @Field(() => [transfer_in_transactionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<transfer_in_transactionsOrderByWithAggregationInput>;

    @Field(() => [Transfer_in_transactionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Transfer_in_transactionsScalarFieldEnum>;

    @Field(() => transfer_in_transactionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: transfer_in_transactionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
