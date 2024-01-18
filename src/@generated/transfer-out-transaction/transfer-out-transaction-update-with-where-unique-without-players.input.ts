import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionUpdateWithoutPlayersInput } from './transfer-out-transaction-update-without-players.input';

@InputType()
export class TransferOutTransactionUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>;

    @Field(() => TransferOutTransactionUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => TransferOutTransactionUpdateWithoutPlayersInput)
    data!: TransferOutTransactionUpdateWithoutPlayersInput;
}
