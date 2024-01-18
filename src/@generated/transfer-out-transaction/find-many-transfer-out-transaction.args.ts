import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferOutTransactionWhereInput } from './transfer-out-transaction-where.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionOrderByWithRelationInput } from './transfer-out-transaction-order-by-with-relation.input';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransferOutTransactionScalarFieldEnum } from './transfer-out-transaction-scalar-field.enum';

@ArgsType()
export class FindManyTransferOutTransactionArgs {

    @Field(() => TransferOutTransactionWhereInput, {nullable:true})
    @Type(() => TransferOutTransactionWhereInput)
    where?: TransferOutTransactionWhereInput;

    @Field(() => [TransferOutTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransferOutTransactionOrderByWithRelationInput>;

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:true})
    cursor?: TransferOutTransactionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TransferOutTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TransferOutTransactionScalarFieldEnum>;
}
