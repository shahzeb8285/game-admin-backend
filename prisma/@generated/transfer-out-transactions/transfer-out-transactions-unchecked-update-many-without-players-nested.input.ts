import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateWithoutPlayersInput } from './transfer-out-transactions-create-without-players.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsCreateOrConnectWithoutPlayersInput } from './transfer-out-transactions-create-or-connect-without-players.input';
import { transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayersInput } from './transfer-out-transactions-upsert-with-where-unique-without-players.input';
import { transfer_out_transactionsCreateManyPlayersInputEnvelope } from './transfer-out-transactions-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';
import { transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayersInput } from './transfer-out-transactions-update-with-where-unique-without-players.input';
import { transfer_out_transactionsUpdateManyWithWhereWithoutPlayersInput } from './transfer-out-transactions-update-many-with-where-without-players.input';
import { transfer_out_transactionsScalarWhereInput } from './transfer-out-transactions-scalar-where.input';

@InputType()
export class transfer_out_transactionsUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [transfer_out_transactionsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateWithoutPlayersInput)
    create?: Array<transfer_out_transactionsCreateWithoutPlayersInput>;

    @Field(() => [transfer_out_transactionsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<transfer_out_transactionsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => transfer_out_transactionsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => transfer_out_transactionsCreateManyPlayersInputEnvelope)
    createMany?: transfer_out_transactionsCreateManyPlayersInputEnvelope;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<transfer_out_transactionsWhereUniqueInput, 'transfer_out_transaction_id'>>;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<transfer_out_transactionsWhereUniqueInput, 'transfer_out_transaction_id'>>;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<transfer_out_transactionsWhereUniqueInput, 'transfer_out_transaction_id'>>;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<transfer_out_transactionsWhereUniqueInput, 'transfer_out_transaction_id'>>;

    @Field(() => [transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [transfer_out_transactionsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_out_transactionsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<transfer_out_transactionsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [transfer_out_transactionsScalarWhereInput], {nullable:true})
    @Type(() => transfer_out_transactionsScalarWhereInput)
    deleteMany?: Array<transfer_out_transactionsScalarWhereInput>;
}
