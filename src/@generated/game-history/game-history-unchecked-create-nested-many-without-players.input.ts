import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryCreateWithoutPlayersInput } from './game-history-create-without-players.input';
import { Type } from 'class-transformer';
import { GameHistoryCreateOrConnectWithoutPlayersInput } from './game-history-create-or-connect-without-players.input';
import { GameHistoryCreateManyPlayersInputEnvelope } from './game-history-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';

@InputType()
export class GameHistoryUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [GameHistoryCreateWithoutPlayersInput], {nullable:true})
    @Type(() => GameHistoryCreateWithoutPlayersInput)
    create?: Array<GameHistoryCreateWithoutPlayersInput>;

    @Field(() => [GameHistoryCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => GameHistoryCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<GameHistoryCreateOrConnectWithoutPlayersInput>;

    @Field(() => GameHistoryCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => GameHistoryCreateManyPlayersInputEnvelope)
    createMany?: GameHistoryCreateManyPlayersInputEnvelope;

    @Field(() => [GameHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GameHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GameHistoryWhereUniqueInput, 'game_history_id'>>;
}
