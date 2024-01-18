import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsWhereInput } from '../deposit-transactions/deposit-transactions-where.input';
import { Type } from 'class-transformer';
import { deposit_transactionsOrderByWithRelationInput } from '../deposit-transactions/deposit-transactions-order-by-with-relation.input';
import { deposit_transactionsWhereUniqueInput } from '../deposit-transactions/deposit-transactions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedepositTransactionsArgs {

    @Field(() => deposit_transactionsWhereInput, {nullable:true})
    @Type(() => deposit_transactionsWhereInput)
    where?: deposit_transactionsWhereInput;

    @Field(() => [deposit_transactionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<deposit_transactionsOrderByWithRelationInput>;

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:true})
    cursor?: deposit_transactionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
