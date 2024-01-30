import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Game_round_infosCountAggregate } from './game-round-infos-count-aggregate.output';
import { Game_round_infosMinAggregate } from './game-round-infos-min-aggregate.output';
import { Game_round_infosMaxAggregate } from './game-round-infos-max-aggregate.output';

@ObjectType()
export class Game_round_infosGroupBy {

    @Field(() => String, {nullable:false})
    game_round_info_id!: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => String, {nullable:false})
    i_extparam!: string;

    @Field(() => String, {nullable:false})
    game_extra!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Game_round_infosCountAggregate, {nullable:true})
    _count?: Game_round_infosCountAggregate;

    @Field(() => Game_round_infosMinAggregate, {nullable:true})
    _min?: Game_round_infosMinAggregate;

    @Field(() => Game_round_infosMaxAggregate, {nullable:true})
    _max?: Game_round_infosMaxAggregate;
}
