import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryWhereInput } from './game-history-where.input';

@InputType()
export class GameHistoryListRelationFilter {

    @Field(() => GameHistoryWhereInput, {nullable:true})
    every?: GameHistoryWhereInput;

    @Field(() => GameHistoryWhereInput, {nullable:true})
    some?: GameHistoryWhereInput;

    @Field(() => GameHistoryWhereInput, {nullable:true})
    none?: GameHistoryWhereInput;
}
