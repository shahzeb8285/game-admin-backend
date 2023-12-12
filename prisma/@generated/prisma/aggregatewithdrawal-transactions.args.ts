import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereInput } from '../withdrawal-transactions/withdrawal-transactions-where.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsOrderByWithRelationInput } from '../withdrawal-transactions/withdrawal-transactions-order-by-with-relation.input';
import { withdrawal_transactionsWhereUniqueInput } from '../withdrawal-transactions/withdrawal-transactions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatewithdrawalTransactionsArgs {

    @Field(() => withdrawal_transactionsWhereInput, {nullable:true})
    @Type(() => withdrawal_transactionsWhereInput)
    where?: withdrawal_transactionsWhereInput;

    @Field(() => [withdrawal_transactionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<withdrawal_transactionsOrderByWithRelationInput>;

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:true})
    cursor?: withdrawal_transactionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
