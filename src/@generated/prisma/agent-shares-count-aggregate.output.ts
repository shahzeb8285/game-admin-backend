import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Agent_sharesCountAggregate {

    @Field(() => Int, {nullable:false})
    agent_share_id!: number;

    @Field(() => Int, {nullable:false})
    agent_id!: number;

    @Field(() => Int, {nullable:false})
    shares!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    is_active!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
