import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferInTransactionCreateWithoutPlayersInput } from './transfer-in-transaction-create-without-players.input';
import { Type } from 'class-transformer';
import { TransferInTransactionCreateOrConnectWithoutPlayersInput } from './transfer-in-transaction-create-or-connect-without-players.input';
import { TransferInTransactionUpsertWithWhereUniqueWithoutPlayersInput } from './transfer-in-transaction-upsert-with-where-unique-without-players.input';
import { TransferInTransactionCreateManyPlayersInputEnvelope } from './transfer-in-transaction-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';
import { TransferInTransactionUpdateWithWhereUniqueWithoutPlayersInput } from './transfer-in-transaction-update-with-where-unique-without-players.input';
import { TransferInTransactionUpdateManyWithWhereWithoutPlayersInput } from './transfer-in-transaction-update-many-with-where-without-players.input';
import { TransferInTransactionScalarWhereInput } from './transfer-in-transaction-scalar-where.input';

@InputType()
export class TransferInTransactionUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [TransferInTransactionCreateWithoutPlayersInput], {nullable:true})
    @Type(() => TransferInTransactionCreateWithoutPlayersInput)
    create?: Array<TransferInTransactionCreateWithoutPlayersInput>;

    @Field(() => [TransferInTransactionCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => TransferInTransactionCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<TransferInTransactionCreateOrConnectWithoutPlayersInput>;

    @Field(() => [TransferInTransactionUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => TransferInTransactionUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<TransferInTransactionUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => TransferInTransactionCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => TransferInTransactionCreateManyPlayersInputEnvelope)
    createMany?: TransferInTransactionCreateManyPlayersInputEnvelope;

    @Field(() => [TransferInTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferInTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>>;

    @Field(() => [TransferInTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferInTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>>;

    @Field(() => [TransferInTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferInTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>>;

    @Field(() => [TransferInTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferInTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>>;

    @Field(() => [TransferInTransactionUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => TransferInTransactionUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<TransferInTransactionUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [TransferInTransactionUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => TransferInTransactionUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<TransferInTransactionUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [TransferInTransactionScalarWhereInput], {nullable:true})
    @Type(() => TransferInTransactionScalarWhereInput)
    deleteMany?: Array<TransferInTransactionScalarWhereInput>;
}
