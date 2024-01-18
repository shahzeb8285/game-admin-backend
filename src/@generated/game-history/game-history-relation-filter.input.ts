import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryWhereInput } from './game-history-where.input';

@InputType()
export class GameHistoryRelationFilter {

    @Field(() => GameHistoryWhereInput, {nullable:true})
    is?: GameHistoryWhereInput;

    @Field(() => GameHistoryWhereInput, {nullable:true})
    isNot?: GameHistoryWhereInput;
}
