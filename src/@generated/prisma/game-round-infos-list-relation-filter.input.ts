import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosWhereInput } from '../game-round-infos/game-round-infos-where.input';

@InputType()
export class Game_round_infosListRelationFilter {

    @Field(() => game_round_infosWhereInput, {nullable:true})
    every?: game_round_infosWhereInput;

    @Field(() => game_round_infosWhereInput, {nullable:true})
    some?: game_round_infosWhereInput;

    @Field(() => game_round_infosWhereInput, {nullable:true})
    none?: game_round_infosWhereInput;
}
