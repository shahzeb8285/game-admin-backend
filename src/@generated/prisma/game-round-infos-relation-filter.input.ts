import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosWhereInput } from '../game-round-infos/game-round-infos-where.input';

@InputType()
export class Game_round_infosRelationFilter {

    @Field(() => game_round_infosWhereInput, {nullable:true})
    is?: game_round_infosWhereInput;

    @Field(() => game_round_infosWhereInput, {nullable:true})
    isNot?: game_round_infosWhereInput;
}
