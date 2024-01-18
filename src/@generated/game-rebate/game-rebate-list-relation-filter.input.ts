import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRebateWhereInput } from './game-rebate-where.input';

@InputType()
export class GameRebateListRelationFilter {

    @Field(() => GameRebateWhereInput, {nullable:true})
    every?: GameRebateWhereInput;

    @Field(() => GameRebateWhereInput, {nullable:true})
    some?: GameRebateWhereInput;

    @Field(() => GameRebateWhereInput, {nullable:true})
    none?: GameRebateWhereInput;
}
