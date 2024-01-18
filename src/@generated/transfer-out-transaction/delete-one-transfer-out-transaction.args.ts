import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTransferOutTransactionArgs {

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>;
}
