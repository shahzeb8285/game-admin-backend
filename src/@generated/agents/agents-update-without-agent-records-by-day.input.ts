import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateOneWithoutChildrenNestedInput } from './agents-update-one-without-children-nested.input';
import { agentsUpdateManyWithoutParentNestedInput } from './agents-update-many-without-parent-nested.input';
import { playersUpdateManyWithoutAgentNestedInput } from '../players/players-update-many-without-agent-nested.input';
import { agent_rebate_ratesUpdateManyWithoutAgentsNestedInput } from '../agent-rebate-rates/agent-rebate-rates-update-many-without-agents-nested.input';
import { agent_sharesUpdateManyWithoutAgentsNestedInput } from '../agent-shares/agent-shares-update-many-without-agents-nested.input';

@InputType()
export class agentsUpdateWithoutAgent_records_by_dayInput {

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

    @Field(() => agentsUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: agentsUpdateOneWithoutChildrenNestedInput;

    @Field(() => agentsUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: agentsUpdateManyWithoutParentNestedInput;

    @Field(() => playersUpdateManyWithoutAgentNestedInput, {nullable:true})
    players?: playersUpdateManyWithoutAgentNestedInput;

    @Field(() => agent_rebate_ratesUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_rebate_rates?: agent_rebate_ratesUpdateManyWithoutAgentsNestedInput;

    @Field(() => agent_sharesUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_shares?: agent_sharesUpdateManyWithoutAgentsNestedInput;
}
