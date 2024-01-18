import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AgentCountAggregate } from './agent-count-aggregate.output';
import { AgentMinAggregate } from './agent-min-aggregate.output';
import { AgentMaxAggregate } from './agent-max-aggregate.output';

@ObjectType()
export class AggregateAgent {

    @Field(() => AgentCountAggregate, {nullable:true})
    _count?: AgentCountAggregate;

    @Field(() => AgentMinAggregate, {nullable:true})
    _min?: AgentMinAggregate;

    @Field(() => AgentMaxAggregate, {nullable:true})
    _max?: AgentMaxAggregate;
}
