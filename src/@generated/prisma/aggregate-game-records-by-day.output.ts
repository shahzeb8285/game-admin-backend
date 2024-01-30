import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Game_records_by_dayCountAggregate } from './game-records-by-day-count-aggregate.output';
import { Game_records_by_dayAvgAggregate } from './game-records-by-day-avg-aggregate.output';
import { Game_records_by_daySumAggregate } from './game-records-by-day-sum-aggregate.output';
import { Game_records_by_dayMinAggregate } from './game-records-by-day-min-aggregate.output';
import { Game_records_by_dayMaxAggregate } from './game-records-by-day-max-aggregate.output';

@ObjectType()
export class AggregateGame_records_by_day {

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
