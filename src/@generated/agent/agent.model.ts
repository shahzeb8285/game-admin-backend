import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Player } from '../player/player.model';
import { AgentRebate } from '../agent-rebate/agent-rebate.model';
import { AgentCount } from './agent-count.output';

@ObjectType()
export class Agent {

    @Field(() => ID, {nullable:false})
    agent_id!: string;

    @Field(() => String, {nullable:false})
    agent_name!: string;

    @Field(() => String, {nullable:false})
    agent_password!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => String, {nullable:true})
    parent_agent_id!: string | null;

    @Field(() => [Player], {nullable:true})
    players?: Array<Player>;

    @Field(() => [AgentRebate], {nullable:true})
    agent_rebates?: Array<AgentRebate>;

    @Field(() => Agent, {nullable:true})
    parent?: Agent | null;

    @Field(() => [Agent], {nullable:true})
    children?: Array<Agent>;

    @Field(() => AgentCount, {nullable:false})
    _count?: AgentCount;
}
