import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereInput } from '../transfer-out-transactions/transfer-out-transactions-where.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsOrderByWithRelationInput } from '../transfer-out-transactions/transfer-out-transactions-order-by-with-relation.input';
import { transfer_out_transactionsWhereUniqueInput } from '../transfer-out-transactions/transfer-out-transactions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Transfer_out_transactionsScalarFieldEnum } from './transfer-out-transactions-scalar-field.enum';

@ArgsType()
export class FindFirsttransferOutTransactionsArgs {

    @Field(() => transfer_out_transactionsWhereInput, {nullable:true})
    @Type(() => transfer_out_transactionsWhereInput)
    where?: transfer_out_transactionsWhereInput;

    @Field(() => [transfer_out_transactionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<transfer_out_transactionsOrderByWithRelationInput>;

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:true})
    cursor?: transfer_out_transactionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Transfer_out_transactionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Transfer_out_transactionsScalarFieldEnum>;
}
