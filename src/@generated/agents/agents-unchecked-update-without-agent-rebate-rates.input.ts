import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUncheckedUpdateManyWithoutParentNestedInput } from './agents-unchecked-update-many-without-parent-nested.input';
import { playersUncheckedUpdateManyWithoutAgentNestedInput } from '../players/players-unchecked-update-many-without-agent-nested.input';
import { agent_sharesUncheckedUpdateManyWithoutAgentsNestedInput } from '../agent-shares/agent-shares-unchecked-update-many-without-agents-nested.input';
import { agent_records_by_dayUncheckedUpdateManyWithoutAgentsNestedInput } from '../agent-records-by-day/agent-records-by-day-unchecked-update-many-without-agents-nested.input';

@InputType()
export class agentsUncheckedUpdateWithoutAgent_rebate_ratesInput {

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

    @Field(() => String, {nullable:true})
    domain?: string;

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

    @Field(() => agent_sharesUncheckedUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_shares?: agent_sharesUncheckedUpdateManyWithoutAgentsNestedInput;

    @Field(() => agent_records_by_dayUncheckedUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayUncheckedUpdateManyWithoutAgentsNestedInput;
}
