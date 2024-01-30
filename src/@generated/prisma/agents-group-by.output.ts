import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AgentsCountAggregate } from './agents-count-aggregate.output';
import { AgentsMinAggregate } from './agents-min-aggregate.output';
import { AgentsMaxAggregate } from './agents-max-aggregate.output';

@ObjectType()
export class AgentsGroupBy {

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => String, {nullable:false})
    agent_name!: string;

    @Field(() => String, {nullable:false})
    agent_password!: string;

    @Field(() => String, {nullable:true})
    parent_agent_id?: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => AgentsCountAggregate, {nullable:true})
    _count?: AgentsCountAggregate;

    @Field(() => AgentsMinAggregate, {nullable:true})
    _min?: AgentsMinAggregate;

    @Field(() => AgentsMaxAggregate, {nullable:true})
    _max?: AgentsMaxAggregate;
}
