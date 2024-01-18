import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AgentRebateCountAggregate } from './agent-rebate-count-aggregate.output';
import { AgentRebateAvgAggregate } from './agent-rebate-avg-aggregate.output';
import { AgentRebateSumAggregate } from './agent-rebate-sum-aggregate.output';
import { AgentRebateMinAggregate } from './agent-rebate-min-aggregate.output';
import { AgentRebateMaxAggregate } from './agent-rebate-max-aggregate.output';

@ObjectType()
export class AggregateAgentRebate {

    @Field(() => AgentRebateCountAggregate, {nullable:true})
    _count?: AgentRebateCountAggregate;

    @Field(() => AgentRebateAvgAggregate, {nullable:true})
    _avg?: AgentRebateAvgAggregate;

    @Field(() => AgentRebateSumAggregate, {nullable:true})
    _sum?: AgentRebateSumAggregate;

    @Field(() => AgentRebateMinAggregate, {nullable:true})
    _min?: AgentRebateMinAggregate;

    @Field(() => AgentRebateMaxAggregate, {nullable:true})
    _max?: AgentRebateMaxAggregate;
}
