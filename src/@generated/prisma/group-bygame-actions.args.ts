import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsWhereInput } from '../game-actions/game-actions-where.input';
import { Type } from 'class-transformer';
import { game_actionsOrderByWithAggregationInput } from '../game-actions/game-actions-order-by-with-aggregation.input';
import { Game_actionsScalarFieldEnum } from './game-actions-scalar-field.enum';
import { game_actionsScalarWhereWithAggregatesInput } from '../game-actions/game-actions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygameActionsArgs {

    @Field(() => game_actionsWhereInput, {nullable:true})
    @Type(() => game_actionsWhereInput)
    where?: game_actionsWhereInput;

    @Field(() => [game_actionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<game_actionsOrderByWithAggregationInput>;

    @Field(() => [Game_actionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Game_actionsScalarFieldEnum>;

    @Field(() => game_actionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: game_actionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
