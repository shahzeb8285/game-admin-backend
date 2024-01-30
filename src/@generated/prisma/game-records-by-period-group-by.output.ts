import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { rebate_status } from './rebate-status.enum';
import { Game_records_by_periodCountAggregate } from './game-records-by-period-count-aggregate.output';
import { Game_records_by_periodAvgAggregate } from './game-records-by-period-avg-aggregate.output';
import { Game_records_by_periodSumAggregate } from './game-records-by-period-sum-aggregate.output';
import { Game_records_by_periodMinAggregate } from './game-records-by-period-min-aggregate.output';
import { Game_records_by_periodMaxAggregate } from './game-records-by-period-max-aggregate.output';

@ObjectType()
export class Game_records_by_periodGroupBy {

    @Field(() => String, {nullable:false})
    game_records_by_period_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date | string;

    @Field(() => String, {nullable:false})
    game_url!: string;

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

    @Field(() => rebate_status, {nullable:false})
    rebate_status!: keyof typeof rebate_status;

    @Field(() => Game_records_by_periodCountAggregate, {nullable:true})
    _count?: Game_records_by_periodCountAggregate;

    @Field(() => Game_records_by_periodAvgAggregate, {nullable:true})
    _avg?: Game_records_by_periodAvgAggregate;

    @Field(() => Game_records_by_periodSumAggregate, {nullable:true})
    _sum?: Game_records_by_periodSumAggregate;

    @Field(() => Game_records_by_periodMinAggregate, {nullable:true})
    _min?: Game_records_by_periodMinAggregate;

    @Field(() => Game_records_by_periodMaxAggregate, {nullable:true})
    _max?: Game_records_by_periodMaxAggregate;
}
