import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsWhereInput } from '../deposit-transactions/deposit-transactions-where.input';
import { Type } from 'class-transformer';
import { deposit_transactionsOrderByWithAggregationInput } from '../deposit-transactions/deposit-transactions-order-by-with-aggregation.input';
import { Deposit_transactionsScalarFieldEnum } from './deposit-transactions-scalar-field.enum';
import { deposit_transactionsScalarWhereWithAggregatesInput } from '../deposit-transactions/deposit-transactions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydepositTransactionsArgs {

    @Field(() => deposit_transactionsWhereInput, {nullable:true})
    @Type(() => deposit_transactionsWhereInput)
    where?: deposit_transactionsWhereInput;

    @Field(() => [deposit_transactionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<deposit_transactionsOrderByWithAggregationInput>;

    @Field(() => [Deposit_transactionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Deposit_transactionsScalarFieldEnum>;

    @Field(() => deposit_transactionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: deposit_transactionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
