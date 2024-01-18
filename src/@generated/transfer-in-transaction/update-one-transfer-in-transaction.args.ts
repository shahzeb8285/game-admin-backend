import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionUpdateInput } from './transfer-in-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';

@ArgsType()
export class UpdateOneTransferInTransactionArgs {

    @Field(() => TransferInTransactionUpdateInput, {nullable:false})
    @Type(() => TransferInTransactionUpdateInput)
    data!: TransferInTransactionUpdateInput;

    @Field(() => TransferInTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferInTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>;
}
