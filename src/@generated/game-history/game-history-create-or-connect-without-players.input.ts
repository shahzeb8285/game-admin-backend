import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';
import { GameHistoryCreateWithoutPlayersInput } from './game-history-create-without-players.input';

@InputType()
export class GameHistoryCreateOrConnectWithoutPlayersInput {

    @Field(() => GameHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GameHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<GameHistoryWhereUniqueInput, 'game_history_id'>;

    @Field(() => GameHistoryCreateWithoutPlayersInput, {nullable:false})
    @Type(() => GameHistoryCreateWithoutPlayersInput)
    create!: GameHistoryCreateWithoutPlayersInput;
}
