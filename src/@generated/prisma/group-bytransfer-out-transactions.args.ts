import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereInput } from '../transfer-out-transactions/transfer-out-transactions-where.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsOrderByWithAggregationInput } from '../transfer-out-transactions/transfer-out-transactions-order-by-with-aggregation.input';
import { Transfer_out_transactionsScalarFieldEnum } from './transfer-out-transactions-scalar-field.enum';
import { transfer_out_transactionsScalarWhereWithAggregatesInput } from '../transfer-out-transactions/transfer-out-transactions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBytransferOutTransactionsArgs {

    @Field(() => transfer_out_transactionsWhereInput, {nullable:true})
    @Type(() => transfer_out_transactionsWhereInput)
    where?: transfer_out_transactionsWhereInput;

    @Field(() => [transfer_out_transactionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<transfer_out_transactionsOrderByWithAggregationInput>;

    @Field(() => [Transfer_out_transactionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Transfer_out_transactionsScalarFieldEnum>;

    @Field(() => transfer_out_transactionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: transfer_out_transactionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
