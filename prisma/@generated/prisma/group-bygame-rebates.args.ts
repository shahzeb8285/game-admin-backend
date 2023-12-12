import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesWhereInput } from '../game-rebates/game-rebates-where.input';
import { Type } from 'class-transformer';
import { game_rebatesOrderByWithAggregationInput } from '../game-rebates/game-rebates-order-by-with-aggregation.input';
import { Game_rebatesScalarFieldEnum } from './game-rebates-scalar-field.enum';
import { game_rebatesScalarWhereWithAggregatesInput } from '../game-rebates/game-rebates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygameRebatesArgs {

    @Field(() => game_rebatesWhereInput, {nullable:true})
    @Type(() => game_rebatesWhereInput)
    where?: game_rebatesWhereInput;

    @Field(() => [game_rebatesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<game_rebatesOrderByWithAggregationInput>;

    @Field(() => [Game_rebatesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Game_rebatesScalarFieldEnum>;

    @Field(() => game_rebatesScalarWhereWithAggregatesInput, {nullable:true})
    having?: game_rebatesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
