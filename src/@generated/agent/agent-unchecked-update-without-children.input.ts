import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUncheckedUpdateManyWithoutAgentNestedInput } from '../player/player-unchecked-update-many-without-agent-nested.input';
import { AgentRebateUncheckedUpdateManyWithoutAgentsNestedInput } from '../agent-rebate/agent-rebate-unchecked-update-many-without-agents-nested.input';

@InputType()
export class AgentUncheckedUpdateWithoutChildrenInput {

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

    @Field(() => String, {nullable:true})
    parent_agent_id?: string;

    @Field(() => PlayerUncheckedUpdateManyWithoutAgentNestedInput, {nullable:true})
    players?: PlayerUncheckedUpdateManyWithoutAgentNestedInput;

    @Field(() => AgentRebateUncheckedUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_rebates?: AgentRebateUncheckedUpdateManyWithoutAgentsNestedInput;
}
