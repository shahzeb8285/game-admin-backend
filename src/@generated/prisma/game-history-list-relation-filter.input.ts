import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyWhereInput } from '../game-history/game-history-where.input';

@InputType()
export class Game_historyListRelationFilter {

    @Field(() => game_historyWhereInput, {nullable:true})
    every?: game_historyWhereInput;

    @Field(() => game_historyWhereInput, {nullable:true})
    some?: game_historyWhereInput;

    @Field(() => game_historyWhereInput, {nullable:true})
    none?: game_historyWhereInput;
}
