import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Game_record_roundsCountAggregate } from './game-record-rounds-count-aggregate.output';
import { Game_record_roundsAvgAggregate } from './game-record-rounds-avg-aggregate.output';
import { Game_record_roundsSumAggregate } from './game-record-rounds-sum-aggregate.output';
import { Game_record_roundsMinAggregate } from './game-record-rounds-min-aggregate.output';
import { Game_record_roundsMaxAggregate } from './game-record-rounds-max-aggregate.output';

@ObjectType()
export class Game_record_roundsGroupBy {

    @Field(() => String, {nullable:false})
    game_round_info_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date | string;

    @Field(() => String, {nullable:false})
    game_url!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:true})
    bet_amount?: number;

    @Field(() => Float, {nullable:false})
    payout!: number;

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;

    @Field(() => Boolean, {nullable:false})
    is_processed!: boolean;

    @Field(() => String, {nullable:false})
    game_records_by_period_id!: string;

    @Field(() => Game_record_roundsCountAggregate, {nullable:true})
    _count?: Game_record_roundsCountAggregate;

    @Field(() => Game_record_roundsAvgAggregate, {nullable:true})
    _avg?: Game_record_roundsAvgAggregate;

    @Field(() => Game_record_roundsSumAggregate, {nullable:true})
    _sum?: Game_record_roundsSumAggregate;

    @Field(() => Game_record_roundsMinAggregate, {nullable:true})
    _min?: Game_record_roundsMinAggregate;

    @Field(() => Game_record_roundsMaxAggregate, {nullable:true})
    _max?: Game_record_roundsMaxAggregate;
}
