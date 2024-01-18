import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GameHistoryCountAggregate } from './game-history-count-aggregate.output';
import { GameHistoryAvgAggregate } from './game-history-avg-aggregate.output';
import { GameHistorySumAggregate } from './game-history-sum-aggregate.output';
import { GameHistoryMinAggregate } from './game-history-min-aggregate.output';
import { GameHistoryMaxAggregate } from './game-history-max-aggregate.output';

@ObjectType()
export class GameHistoryGroupBy {

    @Field(() => String, {nullable:false})
    game_history_id!: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => Float, {nullable:false})
    bet_amount!: number;

    @Field(() => Float, {nullable:false})
    win_amount!: number;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => GameHistoryCountAggregate, {nullable:true})
    _count?: GameHistoryCountAggregate;

    @Field(() => GameHistoryAvgAggregate, {nullable:true})
    _avg?: GameHistoryAvgAggregate;

    @Field(() => GameHistorySumAggregate, {nullable:true})
    _sum?: GameHistorySumAggregate;

    @Field(() => GameHistoryMinAggregate, {nullable:true})
    _min?: GameHistoryMinAggregate;

    @Field(() => GameHistoryMaxAggregate, {nullable:true})
    _max?: GameHistoryMaxAggregate;
}
