import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_historyWhereInput } from '../game-history/game-history-where.input';

@InputType()
export class Game_historyRelationFilter {

    @Field(() => game_historyWhereInput, {nullable:true})
    is?: game_historyWhereInput;

    @Field(() => game_historyWhereInput, {nullable:true})
    isNot?: game_historyWhereInput;
}
