import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Agent_records_by_dayCountAggregate } from './agent-records-by-day-count-aggregate.output';
import { Agent_records_by_dayAvgAggregate } from './agent-records-by-day-avg-aggregate.output';
import { Agent_records_by_daySumAggregate } from './agent-records-by-day-sum-aggregate.output';
import { Agent_records_by_dayMinAggregate } from './agent-records-by-day-min-aggregate.output';
import { Agent_records_by_dayMaxAggregate } from './agent-records-by-day-max-aggregate.output';

@ObjectType()
export class AggregateAgent_records_by_day {

    @Field(() => Agent_records_by_dayCountAggregate, {nullable:true})
    _count?: Agent_records_by_dayCountAggregate;

    @Field(() => Agent_records_by_dayAvgAggregate, {nullable:true})
    _avg?: Agent_records_by_dayAvgAggregate;

    @Field(() => Agent_records_by_daySumAggregate, {nullable:true})
    _sum?: Agent_records_by_daySumAggregate;

    @Field(() => Agent_records_by_dayMinAggregate, {nullable:true})
    _min?: Agent_records_by_dayMinAggregate;

    @Field(() => Agent_records_by_dayMaxAggregate, {nullable:true})
    _max?: Agent_records_by_dayMaxAggregate;
}
