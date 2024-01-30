import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AgentsCountAggregate } from './agents-count-aggregate.output';
import { AgentsMinAggregate } from './agents-min-aggregate.output';
import { AgentsMaxAggregate } from './agents-max-aggregate.output';

@ObjectType()
export class AggregateAgents {

    @Field(() => AgentsCountAggregate, {nullable:true})
    _count?: AgentsCountAggregate;

    @Field(() => AgentsMinAggregate, {nullable:true})
    _min?: AgentsMinAggregate;

    @Field(() => AgentsMaxAggregate, {nullable:true})
    _max?: AgentsMaxAggregate;
}
