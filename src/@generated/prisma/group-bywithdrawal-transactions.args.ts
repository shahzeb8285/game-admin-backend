import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereInput } from '../withdrawal-transactions/withdrawal-transactions-where.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsOrderByWithAggregationInput } from '../withdrawal-transactions/withdrawal-transactions-order-by-with-aggregation.input';
import { Withdrawal_transactionsScalarFieldEnum } from './withdrawal-transactions-scalar-field.enum';
import { withdrawal_transactionsScalarWhereWithAggregatesInput } from '../withdrawal-transactions/withdrawal-transactions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBywithdrawalTransactionsArgs {

    @Field(() => withdrawal_transactionsWhereInput, {nullable:true})
    @Type(() => withdrawal_transactionsWhereInput)
    where?: withdrawal_transactionsWhereInput;

    @Field(() => [withdrawal_transactionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<withdrawal_transactionsOrderByWithAggregationInput>;

    @Field(() => [Withdrawal_transactionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Withdrawal_transactionsScalarFieldEnum>;

    @Field(() => withdrawal_transactionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: withdrawal_transactionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
