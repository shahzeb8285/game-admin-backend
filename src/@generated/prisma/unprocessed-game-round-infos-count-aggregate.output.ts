import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Unprocessed_game_round_infosCountAggregate {

    @Field(() => Int, {nullable:false})
    game_round_info_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
