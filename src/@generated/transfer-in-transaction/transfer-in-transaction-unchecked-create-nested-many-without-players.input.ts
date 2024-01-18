import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferInTransactionCreateWithoutPlayersInput } from './transfer-in-transaction-create-without-players.input';
import { Type } from 'class-transformer';
import { TransferInTransactionCreateOrConnectWithoutPlayersInput } from './transfer-in-transaction-create-or-connect-without-players.input';
import { TransferInTransactionCreateManyPlayersInputEnvelope } from './transfer-in-transaction-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';

@InputType()
export class TransferInTransactionUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [TransferInTransactionCreateWithoutPlayersInput], {nullable:true})
    @Type(() => TransferInTransactionCreateWithoutPlayersInput)
    create?: Array<TransferInTransactionCreateWithoutPlayersInput>;

    @Field(() => [TransferInTransactionCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => TransferInTransactionCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<TransferInTransactionCreateOrConnectWithoutPlayersInput>;

    @Field(() => TransferInTransactionCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => TransferInTransactionCreateManyPlayersInputEnvelope)
    createMany?: TransferInTransactionCreateManyPlayersInputEnvelope;

    @Field(() => [TransferInTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferInTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>>;
}
