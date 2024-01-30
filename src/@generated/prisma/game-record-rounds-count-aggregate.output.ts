import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game_record_roundsCountAggregate {

    @Field(() => Int, {nullable:false})
    game_round_info_id!: number;

    @Field(() => Int, {nullable:false})
    game_date!: number;

    @Field(() => Int, {nullable:false})
    game_url!: number;

    @Field(() => Int, {nullable:false})
    player_id!: number;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Int, {nullable:false})
    bet_amount!: number;

    @Field(() => Int, {nullable:false})
    payout!: number;

    @Field(() => Int, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Int, {nullable:false})
    is_processed!: number;

    @Field(() => Int, {nullable:false})
    game_records_by_period_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
