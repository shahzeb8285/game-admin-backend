import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { AgentRebateCountAggregate } from './agent-rebate-count-aggregate.output';
import { AgentRebateAvgAggregate } from './agent-rebate-avg-aggregate.output';
import { AgentRebateSumAggregate } from './agent-rebate-sum-aggregate.output';
import { AgentRebateMinAggregate } from './agent-rebate-min-aggregate.output';
import { AgentRebateMaxAggregate } from './agent-rebate-max-aggregate.output';

@ObjectType()
export class AgentRebateGroupBy {

    @Field(() => String, {nullable:false})
    agent_rebate_id!: string;

    @Field(() => String, {nullable:false})
    agent_id_r!: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => Float, {nullable:false})
    rebate!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    from_date!: Date | string;

    @Field(() => Date, {nullable:false})
    thru_date!: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

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
