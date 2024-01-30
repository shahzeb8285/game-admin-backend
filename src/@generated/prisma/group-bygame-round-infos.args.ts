import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosWhereInput } from '../game-round-infos/game-round-infos-where.input';
import { Type } from 'class-transformer';
import { game_round_infosOrderByWithAggregationInput } from '../game-round-infos/game-round-infos-order-by-with-aggregation.input';
import { Game_round_infosScalarFieldEnum } from './game-round-infos-scalar-field.enum';
import { game_round_infosScalarWhereWithAggregatesInput } from '../game-round-infos/game-round-infos-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygameRoundInfosArgs {

    @Field(() => game_round_infosWhereInput, {nullable:true})
    @Type(() => game_round_infosWhereInput)
    where?: game_round_infosWhereInput;

    @Field(() => [game_round_infosOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<game_round_infosOrderByWithAggregationInput>;

    @Field(() => [Game_round_infosScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Game_round_infosScalarFieldEnum>;

    @Field(() => game_round_infosScalarWhereWithAggregatesInput, {nullable:true})
    having?: game_round_infosScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
