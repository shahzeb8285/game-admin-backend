import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GameHistoryCountAggregate } from './game-history-count-aggregate.output';
import { GameHistoryAvgAggregate } from './game-history-avg-aggregate.output';
import { GameHistorySumAggregate } from './game-history-sum-aggregate.output';
import { GameHistoryMinAggregate } from './game-history-min-aggregate.output';
import { GameHistoryMaxAggregate } from './game-history-max-aggregate.output';

@ObjectType()
export class AggregateGameHistory {

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
