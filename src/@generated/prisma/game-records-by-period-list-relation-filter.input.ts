import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_periodWhereInput } from '../game-records-by-period/game-records-by-period-where.input';

@InputType()
export class Game_records_by_periodListRelationFilter {

    @Field(() => game_records_by_periodWhereInput, {nullable:true})
    every?: game_records_by_periodWhereInput;

    @Field(() => game_records_by_periodWhereInput, {nullable:true})
    some?: game_records_by_periodWhereInput;

    @Field(() => game_records_by_periodWhereInput, {nullable:true})
    none?: game_records_by_periodWhereInput;
}
