import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereInput } from '../transfer-in-transactions/transfer-in-transactions-where.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsOrderByWithRelationInput } from '../transfer-in-transactions/transfer-in-transactions-order-by-with-relation.input';
import { transfer_in_transactionsWhereUniqueInput } from '../transfer-in-transactions/transfer-in-transactions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Transfer_in_transactionsScalarFieldEnum } from './transfer-in-transactions-scalar-field.enum';

@ArgsType()
export class FindFirsttransferInTransactionsArgs {

    @Field(() => transfer_in_transactionsWhereInput, {nullable:true})
    @Type(() => transfer_in_transactionsWhereInput)
    where?: transfer_in_transactionsWhereInput;

    @Field(() => [transfer_in_transactionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<transfer_in_transactionsOrderByWithRelationInput>;

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:true})
    cursor?: transfer_in_transactionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Transfer_in_transactionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Transfer_in_transactionsScalarFieldEnum>;
}
