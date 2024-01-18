import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionWhereInput } from './transfer-in-transaction-where.input';
import { Type } from 'class-transformer';
import { TransferInTransactionOrderByWithRelationInput } from './transfer-in-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransferInTransactionScalarFieldEnum } from './transfer-in-transaction-scalar-field.enum';

@ArgsType()
export class FindFirstTransferInTransactionArgs {

    @Field(() => TransferInTransactionWhereInput, {nullable:true})
    @Type(() => TransferInTransactionWhereInput)
    where?: TransferInTransactionWhereInput;

    @Field(() => [TransferInTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransferInTransactionOrderByWithRelationInput>;

    @Field(() => TransferInTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TransferInTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TransferInTransactionScalarFieldEnum>;
}
