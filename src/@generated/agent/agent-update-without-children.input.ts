import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateManyWithoutAgentNestedInput } from '../player/player-update-many-without-agent-nested.input';
import { AgentRebateUpdateManyWithoutAgentsNestedInput } from '../agent-rebate/agent-rebate-update-many-without-agents-nested.input';
import { AgentUpdateOneWithoutChildrenNestedInput } from './agent-update-one-without-children-nested.input';

@InputType()
export class AgentUpdateWithoutChildrenInput {

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => String, {nullable:true})
    agent_name?: string;

    @Field(() => String, {nullable:true})
    agent_password?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => PlayerUpdateManyWithoutAgentNestedInput, {nullable:true})
    players?: PlayerUpdateManyWithoutAgentNestedInput;

    @Field(() => AgentRebateUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_rebates?: AgentRebateUpdateManyWithoutAgentsNestedInput;

    @Field(() => AgentUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: AgentUpdateOneWithoutChildrenNestedInput;
}
