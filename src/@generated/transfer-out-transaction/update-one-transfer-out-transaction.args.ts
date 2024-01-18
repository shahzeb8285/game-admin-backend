import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferOutTransactionUpdateInput } from './transfer-out-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';

@ArgsType()
export class UpdateOneTransferOutTransactionArgs {

    @Field(() => TransferOutTransactionUpdateInput, {nullable:false})
    @Type(() => TransferOutTransactionUpdateInput)
    data!: TransferOutTransactionUpdateInput;

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>;
}
