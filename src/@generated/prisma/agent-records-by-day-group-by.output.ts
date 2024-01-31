import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Agent_records_by_dayCountAggregate } from './agent-records-by-day-count-aggregate.output';
import { Agent_records_by_dayAvgAggregate } from './agent-records-by-day-avg-aggregate.output';
import { Agent_records_by_daySumAggregate } from './agent-records-by-day-sum-aggregate.output';
import { Agent_records_by_dayMinAggregate } from './agent-records-by-day-min-aggregate.output';
import { Agent_records_by_dayMaxAggregate } from './agent-records-by-day-max-aggregate.output';

@ObjectType()
export class Agent_records_by_dayGroupBy {

    @Field(() => String, {nullable:false})
    agent_records_by_day_id!: string;

    @Field(() => String, {nullable:false})
    game_records_by_day_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date | string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => String, {nullable:true})
    child_agent_id?: string;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Float, {nullable:false})
    rebate_income!: number;

    @Field(() => Float, {nullable:false})
    rebate_expense!: number;

    @Field(() => Float, {nullable:false})
    game_pnl_income!: number;

    @Field(() => Float, {nullable:false})
    game_pnl_expense!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

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
