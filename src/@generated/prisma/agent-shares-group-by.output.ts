import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Agent_sharesCountAggregate } from './agent-shares-count-aggregate.output';
import { Agent_sharesAvgAggregate } from './agent-shares-avg-aggregate.output';
import { Agent_sharesSumAggregate } from './agent-shares-sum-aggregate.output';
import { Agent_sharesMinAggregate } from './agent-shares-min-aggregate.output';
import { Agent_sharesMaxAggregate } from './agent-shares-max-aggregate.output';

@ObjectType()
export class Agent_sharesGroupBy {

    @Field(() => String, {nullable:false})
    agent_share_id!: string;

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => Float, {nullable:false})
    shares!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => Agent_sharesCountAggregate, {nullable:true})
    _count?: Agent_sharesCountAggregate;

    @Field(() => Agent_sharesAvgAggregate, {nullable:true})
    _avg?: Agent_sharesAvgAggregate;

    @Field(() => Agent_sharesSumAggregate, {nullable:true})
    _sum?: Agent_sharesSumAggregate;

    @Field(() => Agent_sharesMinAggregate, {nullable:true})
    _min?: Agent_sharesMinAggregate;

    @Field(() => Agent_sharesMaxAggregate, {nullable:true})
    _max?: Agent_sharesMaxAggregate;
}
