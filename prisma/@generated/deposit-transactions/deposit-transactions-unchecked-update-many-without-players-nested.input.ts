import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateWithoutPlayersInput } from './deposit-transactions-create-without-players.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateOrConnectWithoutPlayersInput } from './deposit-transactions-create-or-connect-without-players.input';
import { deposit_transactionsUpsertWithWhereUniqueWithoutPlayersInput } from './deposit-transactions-upsert-with-where-unique-without-players.input';
import { deposit_transactionsCreateManyPlayersInputEnvelope } from './deposit-transactions-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { deposit_transactionsUpdateWithWhereUniqueWithoutPlayersInput } from './deposit-transactions-update-with-where-unique-without-players.input';
import { deposit_transactionsUpdateManyWithWhereWithoutPlayersInput } from './deposit-transactions-update-many-with-where-without-players.input';
import { deposit_transactionsScalarWhereInput } from './deposit-transactions-scalar-where.input';

@InputType()
export class deposit_transactionsUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [deposit_transactionsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => deposit_transactionsCreateWithoutPlayersInput)
    create?: Array<deposit_transactionsCreateWithoutPlayersInput>;

    @Field(() => [deposit_transactionsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => deposit_transactionsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<deposit_transactionsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [deposit_transactionsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => deposit_transactionsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<deposit_transactionsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => deposit_transactionsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => deposit_transactionsCreateManyPlayersInputEnvelope)
    createMany?: deposit_transactionsCreateManyPlayersInputEnvelope;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<deposit_transactionsWhereUniqueInput, 'deposit_transaction_id'>>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<deposit_transactionsWhereUniqueInput, 'deposit_transaction_id'>>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<deposit_transactionsWhereUniqueInput, 'deposit_transaction_id'>>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<deposit_transactionsWhereUniqueInput, 'deposit_transaction_id'>>;

    @Field(() => [deposit_transactionsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => deposit_transactionsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<deposit_transactionsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [deposit_transactionsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => deposit_transactionsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<deposit_transactionsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [deposit_transactionsScalarWhereInput], {nullable:true})
    @Type(() => deposit_transactionsScalarWhereInput)
    deleteMany?: Array<deposit_transactionsScalarWhereInput>;
}
