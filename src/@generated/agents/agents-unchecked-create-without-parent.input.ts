import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUncheckedCreateNestedManyWithoutParentInput } from './agents-unchecked-create-nested-many-without-parent.input';
import { playersUncheckedCreateNestedManyWithoutAgentInput } from '../players/players-unchecked-create-nested-many-without-agent.input';
import { agent_rebate_ratesUncheckedCreateNestedManyWithoutAgentsInput } from '../agent-rebate-rates/agent-rebate-rates-unchecked-create-nested-many-without-agents.input';
import { agent_sharesUncheckedCreateNestedManyWithoutAgentsInput } from '../agent-shares/agent-shares-unchecked-create-nested-many-without-agents.input';
import { agent_records_by_dayUncheckedCreateNestedManyWithoutAgentsInput } from '../agent-records-by-day/agent-records-by-day-unchecked-create-nested-many-without-agents.input';

@InputType()
export class agentsUncheckedCreateWithoutParentInput {

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

    @Field(() => agentsUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: agentsUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => playersUncheckedCreateNestedManyWithoutAgentInput, {nullable:true})
    players?: playersUncheckedCreateNestedManyWithoutAgentInput;

    @Field(() => agent_rebate_ratesUncheckedCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_rebate_rates?: agent_rebate_ratesUncheckedCreateNestedManyWithoutAgentsInput;

    @Field(() => agent_sharesUncheckedCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_shares?: agent_sharesUncheckedCreateNestedManyWithoutAgentsInput;

    @Field(() => agent_records_by_dayUncheckedCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayUncheckedCreateNestedManyWithoutAgentsInput;
}
