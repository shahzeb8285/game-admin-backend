import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_dayWhereInput } from '../game-records-by-day/game-records-by-day-where.input';

@InputType()
export class Game_records_by_dayListRelationFilter {

    @Field(() => game_records_by_dayWhereInput, {nullable:true})
    every?: game_records_by_dayWhereInput;

    @Field(() => game_records_by_dayWhereInput, {nullable:true})
    some?: game_records_by_dayWhereInput;

    @Field(() => game_records_by_dayWhereInput, {nullable:true})
    none?: game_records_by_dayWhereInput;
}
