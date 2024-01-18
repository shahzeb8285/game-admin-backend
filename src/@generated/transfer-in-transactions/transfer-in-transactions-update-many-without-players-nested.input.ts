import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateWithoutPlayersInput } from './transfer-in-transactions-create-without-players.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsCreateOrConnectWithoutPlayersInput } from './transfer-in-transactions-create-or-connect-without-players.input';
import { transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayersInput } from './transfer-in-transactions-upsert-with-where-unique-without-players.input';
import { transfer_in_transactionsCreateManyPlayersInputEnvelope } from './transfer-in-transactions-create-many-players-input-envelope.input';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';
import { transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayersInput } from './transfer-in-transactions-update-with-where-unique-without-players.input';
import { transfer_in_transactionsUpdateManyWithWhereWithoutPlayersInput } from './transfer-in-transactions-update-many-with-where-without-players.input';
import { transfer_in_transactionsScalarWhereInput } from './transfer-in-transactions-scalar-where.input';

@InputType()
export class transfer_in_transactionsUpdateManyWithoutPlayersNestedInput {

    @Field(() => [transfer_in_transactionsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateWithoutPlayersInput)
    create?: Array<transfer_in_transactionsCreateWithoutPlayersInput>;

    @Field(() => [transfer_in_transactionsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<transfer_in_transactionsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => transfer_in_transactionsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => transfer_in_transactionsCreateManyPlayersInputEnvelope)
    createMany?: transfer_in_transactionsCreateManyPlayersInputEnvelope;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    set?: Array<transfer_in_transactionsWhereUniqueInput>;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    disconnect?: Array<transfer_in_transactionsWhereUniqueInput>;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    delete?: Array<transfer_in_transactionsWhereUniqueInput>;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    connect?: Array<transfer_in_transactionsWhereUniqueInput>;

    @Field(() => [transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [transfer_in_transactionsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<transfer_in_transactionsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [transfer_in_transactionsScalarWhereInput], {nullable:true})
    @Type(() => transfer_in_transactionsScalarWhereInput)
    deleteMany?: Array<transfer_in_transactionsScalarWhereInput>;
}
