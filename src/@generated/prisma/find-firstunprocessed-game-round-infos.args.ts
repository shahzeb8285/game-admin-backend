import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { unprocessed_game_round_infosWhereInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-where.input';
import { Type } from 'class-transformer';
import { unprocessed_game_round_infosOrderByWithRelationInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-order-by-with-relation.input';
import { unprocessed_game_round_infosWhereUniqueInput } from '../unprocessed-game-round-infos/unprocessed-game-round-infos-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Unprocessed_game_round_infosScalarFieldEnum } from './unprocessed-game-round-infos-scalar-field.enum';

@ArgsType()
export class FindFirstunprocessedGameRoundInfosArgs {

    @Field(() => unprocessed_game_round_infosWhereInput, {nullable:true})
    @Type(() => unprocessed_game_round_infosWhereInput)
    where?: unprocessed_game_round_infosWhereInput;

    @Field(() => [unprocessed_game_round_infosOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<unprocessed_game_round_infosOrderByWithRelationInput>;

    @Field(() => unprocessed_game_round_infosWhereUniqueInput, {nullable:true})
    cursor?: unprocessed_game_round_infosWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Unprocessed_game_round_infosScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Unprocessed_game_round_infosScalarFieldEnum>;
}
