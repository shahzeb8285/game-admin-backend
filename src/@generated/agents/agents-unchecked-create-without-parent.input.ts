import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUncheckedCreateNestedManyWithoutAgentInput } from '../players/players-unchecked-create-nested-many-without-agent.input';
import { agent_rebatesUncheckedCreateNestedManyWithoutAgentsInput } from '../agent-rebates/agent-rebates-unchecked-create-nested-many-without-agents.input';
import { agentsUncheckedCreateNestedManyWithoutParentInput } from './agents-unchecked-create-nested-many-without-parent.input';

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

    @Field(() => playersUncheckedCreateNestedManyWithoutAgentInput, {nullable:true})
    players?: playersUncheckedCreateNestedManyWithoutAgentInput;

    @Field(() => agent_rebatesUncheckedCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_rebates?: agent_rebatesUncheckedCreateNestedManyWithoutAgentsInput;

    @Field(() => agentsUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: agentsUncheckedCreateNestedManyWithoutParentInput;
}
