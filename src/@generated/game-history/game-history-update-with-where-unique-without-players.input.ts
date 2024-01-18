import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';
import { GameHistoryUpdateWithoutPlayersInput } from './game-history-update-without-players.input';

@InputType()
export class GameHistoryUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => GameHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GameHistoryWhereUniqueInput)
    where!: GameHistoryWhereUniqueInput;

    @Field(() => GameHistoryUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => GameHistoryUpdateWithoutPlayersInput)
    data!: GameHistoryUpdateWithoutPlayersInput;
}
