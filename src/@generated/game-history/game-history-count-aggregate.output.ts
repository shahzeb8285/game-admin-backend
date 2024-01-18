import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameHistoryCountAggregate {

    @Field(() => Int, {nullable:false})
    game_history_id!: number;

    @Field(() => Int, {nullable:false})
    game_id!: number;

    @Field(() => Int, {nullable:false})
    player_id_r!: number;

    @Field(() => Int, {nullable:false})
    i_gamedesc!: number;

    @Field(() => Int, {nullable:false})
    bet_amount!: number;

    @Field(() => Int, {nullable:false})
    win_amount!: number;

    @Field(() => Int, {nullable:false})
    transaction_date!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
