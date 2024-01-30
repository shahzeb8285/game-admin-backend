import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUncheckedUpdateManyWithoutParentNestedInput } from './agents-unchecked-update-many-without-parent-nested.input';
import { playersUncheckedUpdateManyWithoutAgentNestedInput } from '../players/players-unchecked-update-many-without-agent-nested.input';
import { agent_rebate_ratesUncheckedUpdateManyWithoutAgentsNestedInput } from '../agent-rebate-rates/agent-rebate-rates-unchecked-update-many-without-agents-nested.input';
import { agent_sharesUncheckedUpdateManyWithoutAgentsNestedInput } from '../agent-shares/agent-shares-unchecked-update-many-without-agents-nested.input';

@InputType()
export class agentsUncheckedUpdateWithoutAgent_records_by_dayInput {

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => String, {nullable:true})
    agent_name?: string;

    @Field(() => String, {nullable:true})
    agent_password?: string;

    @Field(() => String, {nullable:true})
    parent_agent_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => agentsUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: agentsUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => playersUncheckedUpdateManyWithoutAgentNestedInput, {nullable:true})
    players?: playersUncheckedUpdateManyWithoutAgentNestedInput;

    @Field(() => agent_rebate_ratesUncheckedUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_rebate_rates?: agent_rebate_ratesUncheckedUpdateManyWithoutAgentsNestedInput;

    @Field(() => agent_sharesUncheckedUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_shares?: agent_sharesUncheckedUpdateManyWithoutAgentsNestedInput;
}
