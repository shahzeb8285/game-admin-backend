import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereInput } from '../game-record-rounds/game-record-rounds-where.input';

@InputType()
export class Game_record_roundsListRelationFilter {

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    every?: game_record_roundsWhereInput;

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    some?: game_record_roundsWhereInput;

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    none?: game_record_roundsWhereInput;
}
