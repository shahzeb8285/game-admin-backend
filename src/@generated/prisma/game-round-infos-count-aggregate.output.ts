import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game_round_infosCountAggregate {

    @Field(() => Int, {nullable:false})
    game_round_info_id!: number;

    @Field(() => Int, {nullable:false})
    game_id!: number;

    @Field(() => Int, {nullable:false})
    player_id!: number;

    @Field(() => Int, {nullable:false})
    i_gamedesc!: number;

    @Field(() => Int, {nullable:false})
    i_extparam!: number;

    @Field(() => Int, {nullable:false})
    game_extra!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
