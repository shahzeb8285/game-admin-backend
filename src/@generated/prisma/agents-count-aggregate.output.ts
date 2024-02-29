import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AgentsCountAggregate {

    @Field(() => Int, {nullable:false})
    agent_id!: number;

    @Field(() => Int, {nullable:false})
    agent_name!: number;

    @Field(() => Int, {nullable:false})
    agent_password!: number;

    @Field(() => Int, {nullable:false})
    parent_agent_id!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    domain!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
