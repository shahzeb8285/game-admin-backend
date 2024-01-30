import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game_actionsCountAggregate {

    @Field(() => Int, {nullable:false})
    game_action_id!: number;

    @Field(() => Int, {nullable:false})
    actid!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    timestamp!: number;

    @Field(() => Int, {nullable:false})
    game_round_info_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
