import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyCreateWithoutPlayersInput } from './game-history-create-without-players.input';
import { Type } from 'class-transformer';
import { game_historyCreateOrConnectWithoutPlayersInput } from './game-history-create-or-connect-without-players.input';
import { game_historyUpsertWithWhereUniqueWithoutPlayersInput } from './game-history-upsert-with-where-unique-without-players.input';
import { game_historyCreateManyPlayersInputEnvelope } from './game-history-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { game_historyWhereUniqueInput } from './game-history-where-unique.input';
import { game_historyUpdateWithWhereUniqueWithoutPlayersInput } from './game-history-update-with-where-unique-without-players.input';
import { game_historyUpdateManyWithWhereWithoutPlayersInput } from './game-history-update-many-with-where-without-players.input';
import { game_historyScalarWhereInput } from './game-history-scalar-where.input';

@InputType()
export class game_historyUpdateManyWithoutPlayersNestedInput {

    @Field(() => [game_historyCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_historyCreateWithoutPlayersInput)
    create?: Array<game_historyCreateWithoutPlayersInput>;

    @Field(() => [game_historyCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_historyCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_historyCreateOrConnectWithoutPlayersInput>;

    @Field(() => [game_historyUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_historyUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<game_historyUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => game_historyCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_historyCreateManyPlayersInputEnvelope)
    createMany?: game_historyCreateManyPlayersInputEnvelope;

    @Field(() => [game_historyWhereUniqueInput], {nullable:true})
    @Type(() => game_historyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<game_historyWhereUniqueInput, 'game_history_id'>>;

    @Field(() => [game_historyWhereUniqueInput], {nullable:true})
    @Type(() => game_historyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<game_historyWhereUniqueInput, 'game_history_id'>>;

    @Field(() => [game_historyWhereUniqueInput], {nullable:true})
    @Type(() => game_historyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<game_historyWhereUniqueInput, 'game_history_id'>>;

    @Field(() => [game_historyWhereUniqueInput], {nullable:true})
    @Type(() => game_historyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<game_historyWhereUniqueInput, 'game_history_id'>>;

    @Field(() => [game_historyUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_historyUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<game_historyUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [game_historyUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => game_historyUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<game_historyUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [game_historyScalarWhereInput], {nullable:true})
    @Type(() => game_historyScalarWhereInput)
    deleteMany?: Array<game_historyScalarWhereInput>;
}
