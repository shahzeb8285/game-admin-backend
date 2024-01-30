import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosWhereInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-where.input';
import { Type } from 'class-transformer';
import { unprocessed_game_round_infosOrderByWithAggregationInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-order-by-with-aggregation.input';
import { Unprocessed_game_round_infosScalarFieldEnum } from './unprocessed-game-round-infos-scalar-field.enum';
import { unprocessed_game_round_infosScalarWhereWithAggregatesInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByunprocessedGameRoundInfosArgs {

    @Field(() => unprocessed_game_round_infosWhereInput, {nullable:true})
    @Type(() => unprocessed_game_round_infosWhereInput)
    where?: unprocessed_game_round_infosWhereInput;

    @Field(() => [unprocessed_game_round_infosOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<unprocessed_game_round_infosOrderByWithAggregationInput>;

    @Field(() => [Unprocessed_game_round_infosScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Unprocessed_game_round_infosScalarFieldEnum>;

    @Field(() => unprocessed_game_round_infosScalarWhereWithAggregatesInput, {nullable:true})
    having?: unprocessed_game_round_infosScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
