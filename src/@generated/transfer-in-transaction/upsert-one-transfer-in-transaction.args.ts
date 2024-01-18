import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransferInTransactionCreateInput } from './transfer-in-transaction-create.input';
import { TransferInTransactionUpdateInput } from './transfer-in-transaction-update.input';

@ArgsType()
export class UpsertOneTransferInTransactionArgs {

    @Field(() => TransferInTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferInTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>;

    @Field(() => TransferInTransactionCreateInput, {nullable:false})
    @Type(() => TransferInTransactionCreateInput)
    create!: TransferInTransactionCreateInput;

    @Field(() => TransferInTransactionUpdateInput, {nullable:false})
    @Type(() => TransferInTransactionUpdateInput)
    update!: TransferInTransactionUpdateInput;
}
