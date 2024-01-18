import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferOutTransactionCreateWithoutPlayersInput } from './transfer-out-transaction-create-without-players.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionCreateOrConnectWithoutPlayersInput } from './transfer-out-transaction-create-or-connect-without-players.input';
import { TransferOutTransactionUpsertWithWhereUniqueWithoutPlayersInput } from './transfer-out-transaction-upsert-with-where-unique-without-players.input';
import { TransferOutTransactionCreateManyPlayersInputEnvelope } from './transfer-out-transaction-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { TransferOutTransactionUpdateWithWhereUniqueWithoutPlayersInput } from './transfer-out-transaction-update-with-where-unique-without-players.input';
import { TransferOutTransactionUpdateManyWithWhereWithoutPlayersInput } from './transfer-out-transaction-update-many-with-where-without-players.input';
import { TransferOutTransactionScalarWhereInput } from './transfer-out-transaction-scalar-where.input';

@InputType()
export class TransferOutTransactionUpdateManyWithoutPlayersNestedInput {

    @Field(() => [TransferOutTransactionCreateWithoutPlayersInput], {nullable:true})
    @Type(() => TransferOutTransactionCreateWithoutPlayersInput)
    create?: Array<TransferOutTransactionCreateWithoutPlayersInput>;

    @Field(() => [TransferOutTransactionCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => TransferOutTransactionCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<TransferOutTransactionCreateOrConnectWithoutPlayersInput>;

    @Field(() => [TransferOutTransactionUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => TransferOutTransactionUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<TransferOutTransactionUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => TransferOutTransactionCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => TransferOutTransactionCreateManyPlayersInputEnvelope)
    createMany?: TransferOutTransactionCreateManyPlayersInputEnvelope;

    @Field(() => [TransferOutTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>>;

    @Field(() => [TransferOutTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>>;

    @Field(() => [TransferOutTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>>;

    @Field(() => [TransferOutTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransferOutTransactionWhereUniqueInput, 'transfer_out_transaction_id'>>;

    @Field(() => [TransferOutTransactionUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => TransferOutTransactionUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<TransferOutTransactionUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [TransferOutTransactionUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => TransferOutTransactionUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<TransferOutTransactionUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [TransferOutTransactionScalarWhereInput], {nullable:true})
    @Type(() => TransferOutTransactionScalarWhereInput)
    deleteMany?: Array<TransferOutTransactionScalarWhereInput>;
}
