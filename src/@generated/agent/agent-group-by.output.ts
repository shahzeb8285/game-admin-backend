import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AgentCountAggregate } from './agent-count-aggregate.output';
import { AgentMinAggregate } from './agent-min-aggregate.output';
import { AgentMaxAggregate } from './agent-max-aggregate.output';

@ObjectType()
export class AgentGroupBy {

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => String, {nullable:false})
    agent_name!: string;

    @Field(() => String, {nullable:false})
    agent_password!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => String, {nullable:true})
    parent_agent_id?: string;

    @Field(() => AgentCountAggregate, {nullable:true})
    _count?: AgentCountAggregate;

    @Field(() => AgentMinAggregate, {nullable:true})
    _min?: AgentMinAggregate;

    @Field(() => AgentMaxAggregate, {nullable:true})
    _max?: AgentMaxAggregate;
}
