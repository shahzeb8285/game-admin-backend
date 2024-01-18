import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTransferInTransactionArgs {

    @Field(() => TransferInTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferInTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>;
}
