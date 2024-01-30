import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game_records_by_periodCountAggregate {

    @Field(() => Int, {nullable:false})
    game_records_by_period_id!: number;

    @Field(() => Int, {nullable:false})
    game_date!: number;

    @Field(() => Int, {nullable:false})
    game_url!: number;

    @Field(() => Int, {nullable:false})
    player_id!: number;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Int, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Int, {nullable:false})
    pnl!: number;

    @Field(() => Int, {nullable:false})
    rebate_amount!: number;

    @Field(() => Int, {nullable:false})
    rebate_status!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
