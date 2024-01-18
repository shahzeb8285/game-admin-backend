import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionUpdateWithoutPlayersInput } from './transfer-out-transaction-update-without-players.input';
import { TransferOutTransactionCreateWithoutPlayersInput } from './transfer-out-transaction-create-without-players.input';

@InputType()
export class TransferOutTransactionUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>;

    @Field(() => TransferOutTransactionUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => TransferOutTransactionUpdateWithoutPlayersInput)
    update!: TransferOutTransactionUpdateWithoutPlayersInput;

    @Field(() => TransferOutTransactionCreateWithoutPlayersInput, {nullable:false})
    @Type(() => TransferOutTransactionCreateWithoutPlayersInput)
    create!: TransferOutTransactionCreateWithoutPlayersInput;
}
