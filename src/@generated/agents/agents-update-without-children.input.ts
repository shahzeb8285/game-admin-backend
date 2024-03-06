import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateOneWithoutChildrenNestedInput } from './agents-update-one-without-children-nested.input';
import { playersUpdateManyWithoutAgentNestedInput } from '../players/players-update-many-without-agent-nested.input';
import { agent_rebate_ratesUpdateManyWithoutAgentsNestedInput } from '../agent-rebate-rates/agent-rebate-rates-update-many-without-agents-nested.input';
import { agent_sharesUpdateManyWithoutAgentsNestedInput } from '../agent-shares/agent-shares-update-many-without-agents-nested.input';
import { agent_records_by_dayUpdateManyWithoutAgentsNestedInput } from '../agent-records-by-day/agent-records-by-day-update-many-without-agents-nested.input';

@InputType()
export class agentsUpdateWithoutChildrenInput {

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => String, {nullable:true})
    agent_name?: string;

    @Field(() => String, {nullable:true})
    agent_password?: string;

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

    @Field(() => agentsUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: agentsUpdateOneWithoutChildrenNestedInput;

    @Field(() => playersUpdateManyWithoutAgentNestedInput, {nullable:true})
    players?: playersUpdateManyWithoutAgentNestedInput;

    @Field(() => agent_rebate_ratesUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_rebate_rates?: agent_rebate_ratesUpdateManyWithoutAgentsNestedInput;

    @Field(() => agent_sharesUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_shares?: agent_sharesUpdateManyWithoutAgentsNestedInput;

    @Field(() => agent_records_by_dayUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayUpdateManyWithoutAgentsNestedInput;
}
