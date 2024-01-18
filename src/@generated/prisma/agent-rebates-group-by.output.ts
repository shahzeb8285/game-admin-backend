import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Agent_rebatesCountAggregate } from './agent-rebates-count-aggregate.output';
import { Agent_rebatesAvgAggregate } from './agent-rebates-avg-aggregate.output';
import { Agent_rebatesSumAggregate } from './agent-rebates-sum-aggregate.output';
import { Agent_rebatesMinAggregate } from './agent-rebates-min-aggregate.output';
import { Agent_rebatesMaxAggregate } from './agent-rebates-max-aggregate.output';

@ObjectType()
export class Agent_rebatesGroupBy {

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

    @Field(() => Agent_rebatesCountAggregate, {nullable:true})
    _count?: Agent_rebatesCountAggregate;

    @Field(() => Agent_rebatesAvgAggregate, {nullable:true})
    _avg?: Agent_rebatesAvgAggregate;

    @Field(() => Agent_rebatesSumAggregate, {nullable:true})
    _sum?: Agent_rebatesSumAggregate;

    @Field(() => Agent_rebatesMinAggregate, {nullable:true})
    _min?: Agent_rebatesMinAggregate;

    @Field(() => Agent_rebatesMaxAggregate, {nullable:true})
    _max?: Agent_rebatesMaxAggregate;
}
