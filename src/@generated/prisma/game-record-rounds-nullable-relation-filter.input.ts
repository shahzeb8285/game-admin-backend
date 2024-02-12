import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereInput } from '../game-record-rounds/game-record-rounds-where.input';

@InputType()
export class Game_record_roundsNullableRelationFilter {

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    is?: game_record_roundsWhereInput;

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    isNot?: game_record_roundsWhereInput;
}
