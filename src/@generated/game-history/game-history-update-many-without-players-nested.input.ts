import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryCreateWithoutPlayersInput } from './game-history-create-without-players.input';
import { Type } from 'class-transformer';
import { GameHistoryCreateOrConnectWithoutPlayersInput } from './game-history-create-or-connect-without-players.input';
import { GameHistoryUpsertWithWhereUniqueWithoutPlayersInput } from './game-history-upsert-with-where-unique-without-players.input';
import { GameHistoryCreateManyPlayersInputEnvelope } from './game-history-create-many-players-input-envelope.input';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { GameHistoryUpdateWithWhereUniqueWithoutPlayersInput } from './game-history-update-with-where-unique-without-players.input';
import { GameHistoryUpdateManyWithWhereWithoutPlayersInput } from './game-history-update-many-with-where-without-players.input';
import { GameHistoryScalarWhereInput } from './game-history-scalar-where.input';

@InputType()
export class GameHistoryUpdateManyWithoutPlayersNestedInput {

    @Field(() => [GameHistoryCreateWithoutPlayersInput], {nullable:true})
    @Type(() => GameHistoryCreateWithoutPlayersInput)
    create?: Array<GameHistoryCreateWithoutPlayersInput>;

    @Field(() => [GameHistoryCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => GameHistoryCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<GameHistoryCreateOrConnectWithoutPlayersInput>;

    @Field(() => [GameHistoryUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => GameHistoryUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<GameHistoryUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => GameHistoryCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => GameHistoryCreateManyPlayersInputEnvelope)
    createMany?: GameHistoryCreateManyPlayersInputEnvelope;

    @Field(() => [GameHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GameHistoryWhereUniqueInput)
    set?: Array<GameHistoryWhereUniqueInput>;

    @Field(() => [GameHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GameHistoryWhereUniqueInput)
    disconnect?: Array<GameHistoryWhereUniqueInput>;

    @Field(() => [GameHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GameHistoryWhereUniqueInput)
    delete?: Array<GameHistoryWhereUniqueInput>;

    @Field(() => [GameHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GameHistoryWhereUniqueInput)
    connect?: Array<GameHistoryWhereUniqueInput>;

    @Field(() => [GameHistoryUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => GameHistoryUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<GameHistoryUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [GameHistoryUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => GameHistoryUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<GameHistoryUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [GameHistoryScalarWhereInput], {nullable:true})
    @Type(() => GameHistoryScalarWhereInput)
    deleteMany?: Array<GameHistoryScalarWhereInput>;
}
