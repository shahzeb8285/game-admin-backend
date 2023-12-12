import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyWhereInput } from '../game-history/game-history-where.input';
import { Type } from 'class-transformer';
import { game_historyOrderByWithAggregationInput } from '../game-history/game-history-order-by-with-aggregation.input';
import { Game_historyScalarFieldEnum } from './game-history-scalar-field.enum';
import { game_historyScalarWhereWithAggregatesInput } from '../game-history/game-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygameHistoryArgs {

    @Field(() => game_historyWhereInput, {nullable:true})
    @Type(() => game_historyWhereInput)
    where?: game_historyWhereInput;

    @Field(() => [game_historyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<game_historyOrderByWithAggregationInput>;

    @Field(() => [Game_historyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Game_historyScalarFieldEnum>;

    @Field(() => game_historyScalarWhereWithAggregatesInput, {nullable:true})
    having?: game_historyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
