import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateNestedOneWithoutChildrenInput } from './agents-create-nested-one-without-children.input';
import { agentsCreateNestedManyWithoutParentInput } from './agents-create-nested-many-without-parent.input';
import { playersCreateNestedManyWithoutAgentInput } from '../players/players-create-nested-many-without-agent.input';
import { agent_rebate_ratesCreateNestedManyWithoutAgentsInput } from '../agent-rebate-rates/agent-rebate-rates-create-nested-many-without-agents.input';
import { agent_sharesCreateNestedManyWithoutAgentsInput } from '../agent-shares/agent-shares-create-nested-many-without-agents.input';
import { agent_records_by_dayCreateNestedManyWithoutAgentsInput } from '../agent-records-by-day/agent-records-by-day-create-nested-many-without-agents.input';

@InputType()
export class agentsCreateInput {

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => String, {nullable:false})
    agent_name!: string;

    @Field(() => String, {nullable:false})
    agent_password!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => agentsCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: agentsCreateNestedOneWithoutChildrenInput;

    @Field(() => agentsCreateNestedManyWithoutParentInput, {nullable:true})
    children?: agentsCreateNestedManyWithoutParentInput;

    @Field(() => playersCreateNestedManyWithoutAgentInput, {nullable:true})
    players?: playersCreateNestedManyWithoutAgentInput;

    @Field(() => agent_rebate_ratesCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_rebate_rates?: agent_rebate_ratesCreateNestedManyWithoutAgentsInput;

    @Field(() => agent_sharesCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_shares?: agent_sharesCreateNestedManyWithoutAgentsInput;

    @Field(() => agent_records_by_dayCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayCreateNestedManyWithoutAgentsInput;
}
