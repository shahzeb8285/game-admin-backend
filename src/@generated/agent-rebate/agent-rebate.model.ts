import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Agent } from '../agent/agent.model';

@ObjectType()
export class AgentRebate {

    @Field(() => ID, {nullable:false})
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
    from_date!: Date;

    @Field(() => Date, {nullable:false})
    thru_date!: Date;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => Agent, {nullable:false})
    agents?: Agent;
}
