import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateNestedManyWithoutAgentInput } from '../players/players-create-nested-many-without-agent.input';
import { agent_rebatesCreateNestedManyWithoutAgentsInput } from '../agent-rebates/agent-rebates-create-nested-many-without-agents.input';
import { agentsCreateNestedOneWithoutChildrenInput } from './agents-create-nested-one-without-children.input';
import { agentsCreateNestedManyWithoutParentInput } from './agents-create-nested-many-without-parent.input';

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

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => playersCreateNestedManyWithoutAgentInput, {nullable:true})
    players?: playersCreateNestedManyWithoutAgentInput;

    @Field(() => agent_rebatesCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_rebates?: agent_rebatesCreateNestedManyWithoutAgentsInput;

    @Field(() => agentsCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: agentsCreateNestedOneWithoutChildrenInput;

    @Field(() => agentsCreateNestedManyWithoutParentInput, {nullable:true})
    children?: agentsCreateNestedManyWithoutParentInput;
}
