import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AgentCount {

    @Field(() => Int, {nullable:false})
    players?: number;

    @Field(() => Int, {nullable:false})
    agent_rebates?: number;

    @Field(() => Int, {nullable:false})
    children?: number;
}
