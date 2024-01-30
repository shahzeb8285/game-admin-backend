import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Unprocessed_game_round_infosCountAggregate } from './unprocessed-game-round-infos-count-aggregate.output';
import { Unprocessed_game_round_infosMinAggregate } from './unprocessed-game-round-infos-min-aggregate.output';
import { Unprocessed_game_round_infosMaxAggregate } from './unprocessed-game-round-infos-max-aggregate.output';

@ObjectType()
export class Unprocessed_game_round_infosGroupBy {

    @Field(() => String, {nullable:false})
    game_round_info_id!: string;

    @Field(() => Unprocessed_game_round_infosCountAggregate, {nullable:true})
    _count?: Unprocessed_game_round_infosCountAggregate;

    @Field(() => Unprocessed_game_round_infosMinAggregate, {nullable:true})
    _min?: Unprocessed_game_round_infosMinAggregate;

    @Field(() => Unprocessed_game_round_infosMaxAggregate, {nullable:true})
    _max?: Unprocessed_game_round_infosMaxAggregate;
}
