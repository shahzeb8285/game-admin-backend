import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsWhereInput } from '../rebate-transactions/rebate-transactions-where.input';
import { Type } from 'class-transformer';
import { rebate_transactionsOrderByWithAggregationInput } from '../rebate-transactions/rebate-transactions-order-by-with-aggregation.input';
import { Rebate_transactionsScalarFieldEnum } from './rebate-transactions-scalar-field.enum';
import { rebate_transactionsScalarWhereWithAggregatesInput } from '../rebate-transactions/rebate-transactions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByrebateTransactionsArgs {

    @Field(() => rebate_transactionsWhereInput, {nullable:true})
    @Type(() => rebate_transactionsWhereInput)
    where?: rebate_transactionsWhereInput;

    @Field(() => [rebate_transactionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<rebate_transactionsOrderByWithAggregationInput>;

    @Field(() => [Rebate_transactionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Rebate_transactionsScalarFieldEnum>;

    @Field(() => rebate_transactionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: rebate_transactionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
