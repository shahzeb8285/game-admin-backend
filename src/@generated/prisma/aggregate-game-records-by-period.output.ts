import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Game_records_by_periodCountAggregate } from './game-records-by-period-count-aggregate.output';
import { Game_records_by_periodAvgAggregate } from './game-records-by-period-avg-aggregate.output';
import { Game_records_by_periodSumAggregate } from './game-records-by-period-sum-aggregate.output';
import { Game_records_by_periodMinAggregate } from './game-records-by-period-min-aggregate.output';
import { Game_records_by_periodMaxAggregate } from './game-records-by-period-max-aggregate.output';

@ObjectType()
export class AggregateGame_records_by_period {

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
