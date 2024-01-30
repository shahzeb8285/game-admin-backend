import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game_records_by_dayCountAggregate {

    @Field(() => Int, {nullable:false})
    game_records_by_day_id!: number;

    @Field(() => Int, {nullable:false})
    game_date!: number;

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
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    is_active!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
