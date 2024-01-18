import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionCreateInput } from './transfer-out-transaction-create.input';
import { TransferOutTransactionUpdateInput } from './transfer-out-transaction-update.input';

@ArgsType()
export class UpsertOneTransferOutTransactionArgs {

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>;

    @Field(() => TransferOutTransactionCreateInput, {nullable:false})
    @Type(() => TransferOutTransactionCreateInput)
    create!: TransferOutTransactionCreateInput;

    @Field(() => TransferOutTransactionUpdateInput, {nullable:false})
    @Type(() => TransferOutTransactionUpdateInput)
    update!: TransferOutTransactionUpdateInput;
}
