import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_round_infosWhereInput } from '../game-round-infos/game-round-infos-where.input';
import { Type } from 'class-transformer';
import { game_round_infosOrderByWithRelationInput } from '../game-round-infos/game-round-infos-order-by-with-relation.input';
import { game_round_infosWhereUniqueInput } from '../game-round-infos/game-round-infos-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Game_round_infosScalarFieldEnum } from './game-round-infos-scalar-field.enum';

@ArgsType()
export class FindFirstgameRoundInfosOrThrowArgs {

    @Field(() => game_round_infosWhereInput, {nullable:true})
    @Type(() => game_round_infosWhereInput)
    where?: game_round_infosWhereInput;

    @Field(() => [game_round_infosOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<game_round_infosOrderByWithRelationInput>;

    @Field(() => game_round_infosWhereUniqueInput, {nullable:true})
    cursor?: game_round_infosWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Game_round_infosScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Game_round_infosScalarFieldEnum>;
}
