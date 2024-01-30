import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Game_records_by_dayCountAggregate } from './game-records-by-day-count-aggregate.output';
import { Game_records_by_dayAvgAggregate } from './game-records-by-day-avg-aggregate.output';
import { Game_records_by_daySumAggregate } from './game-records-by-day-sum-aggregate.output';
import { Game_records_by_dayMinAggregate } from './game-records-by-day-min-aggregate.output';
import { Game_records_by_dayMaxAggregate } from './game-records-by-day-max-aggregate.output';

@ObjectType()
export class Game_records_by_dayGroupBy {

    @Field(() => String, {nullable:false})
    game_records_by_day_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date | string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Float, {nullable:false})
    pnl!: number;

    @Field(() => Float, {nullable:false})
    rebate_amount!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => Game_records_by_dayCountAggregate, {nullable:true})
    _count?: Game_records_by_dayCountAggregate;

    @Field(() => Game_records_by_dayAvgAggregate, {nullable:true})
    _avg?: Game_records_by_dayAvgAggregate;

    @Field(() => Game_records_by_daySumAggregate, {nullable:true})
    _sum?: Game_records_by_daySumAggregate;

    @Field(() => Game_records_by_dayMinAggregate, {nullable:true})
    _min?: Game_records_by_dayMinAggregate;

    @Field(() => Game_records_by_dayMaxAggregate, {nullable:true})
    _max?: Game_records_by_dayMaxAggregate;
}
