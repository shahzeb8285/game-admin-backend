import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsWhereInput } from '../rebate-transactions/rebate-transactions-where.input';
import { Type } from 'class-transformer';
import { rebate_transactionsOrderByWithRelationInput } from '../rebate-transactions/rebate-transactions-order-by-with-relation.input';
import { rebate_transactionsWhereUniqueInput } from '../rebate-transactions/rebate-transactions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregaterebateTransactionsArgs {

    @Field(() => rebate_transactionsWhereInput, {nullable:true})
    @Type(() => rebate_transactionsWhereInput)
    where?: rebate_transactionsWhereInput;

    @Field(() => [rebate_transactionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<rebate_transactionsOrderByWithRelationInput>;

    @Field(() => rebate_transactionsWhereUniqueInput, {nullable:true})
    cursor?: rebate_transactionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
