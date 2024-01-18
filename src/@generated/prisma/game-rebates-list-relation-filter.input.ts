import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_rebatesWhereInput } from '../game-rebates/game-rebates-where.input';

@InputType()
export class Game_rebatesListRelationFilter {

    @Field(() => game_rebatesWhereInput, {nullable:true})
    every?: game_rebatesWhereInput;

    @Field(() => game_rebatesWhereInput, {nullable:true})
    some?: game_rebatesWhereInput;

    @Field(() => game_rebatesWhereInput, {nullable:true})
    none?: game_rebatesWhereInput;
}
