import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateNestedManyWithoutAgentInput } from '../player/player-create-nested-many-without-agent.input';
import { AgentRebateCreateNestedManyWithoutAgentsInput } from '../agent-rebate/agent-rebate-create-nested-many-without-agents.input';
import { AgentCreateNestedOneWithoutChildrenInput } from './agent-create-nested-one-without-children.input';

@InputType()
export class AgentCreateWithoutChildrenInput {

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => String, {nullable:false})
    agent_name!: string;

    @Field(() => String, {nullable:false})
    agent_password!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => PlayerCreateNestedManyWithoutAgentInput, {nullable:true})
    players?: PlayerCreateNestedManyWithoutAgentInput;

    @Field(() => AgentRebateCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_rebates?: AgentRebateCreateNestedManyWithoutAgentsInput;

    @Field(() => AgentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: AgentCreateNestedOneWithoutChildrenInput;
}
