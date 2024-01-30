import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Agent_rebate_ratesCountAggregate } from './agent-rebate-rates-count-aggregate.output';
import { Agent_rebate_ratesAvgAggregate } from './agent-rebate-rates-avg-aggregate.output';
import { Agent_rebate_ratesSumAggregate } from './agent-rebate-rates-sum-aggregate.output';
import { Agent_rebate_ratesMinAggregate } from './agent-rebate-rates-min-aggregate.output';
import { Agent_rebate_ratesMaxAggregate } from './agent-rebate-rates-max-aggregate.output';

@ObjectType()
export class AggregateAgent_rebate_rates {

    @Field(() => Agent_rebate_ratesCountAggregate, {nullable:true})
    _count?: Agent_rebate_ratesCountAggregate;

    @Field(() => Agent_rebate_ratesAvgAggregate, {nullable:true})
    _avg?: Agent_rebate_ratesAvgAggregate;

    @Field(() => Agent_rebate_ratesSumAggregate, {nullable:true})
    _sum?: Agent_rebate_ratesSumAggregate;

    @Field(() => Agent_rebate_ratesMinAggregate, {nullable:true})
    _min?: Agent_rebate_ratesMinAggregate;

    @Field(() => Agent_rebate_ratesMaxAggregate, {nullable:true})
    _max?: Agent_rebate_ratesMaxAggregate;
}
