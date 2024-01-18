import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransferInTransactionCreateInput } from './transfer-in-transaction-create.input';
import { TransferInTransactionUpdateInput } from './transfer-in-transaction-update.input';

@ArgsType()
export class UpsertOneTransferInTransactionArgs {

    @Field(() => TransferInTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferInTransactionWhereUniqueInput)
    where!: TransferInTransactionWhereUniqueInput;

    @Field(() => TransferInTransactionCreateInput, {nullable:false})
    @Type(() => TransferInTransactionCreateInput)
    create!: TransferInTransactionCreateInput;

    @Field(() => TransferInTransactionUpdateInput, {nullable:false})
    @Type(() => TransferInTransactionUpdateInput)
    update!: TransferInTransactionUpdateInput;
}
