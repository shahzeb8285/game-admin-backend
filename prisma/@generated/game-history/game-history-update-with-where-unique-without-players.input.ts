import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';
import { game_historyUpdateWithoutPlayersInput } from './game-history-update-without-players.input';

@InputType()
export class game_historyUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => game_historyWhereUniqueInput, {nullable:false})
    @Type(() => game_historyWhereUniqueInput)
    where!: game_historyWhereUniqueInput;

    @Field(() => game_historyUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => game_historyUpdateWithoutPlayersInput)
    data!: game_historyUpdateWithoutPlayersInput;
}
