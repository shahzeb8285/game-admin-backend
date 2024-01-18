import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentRebateCreateNestedManyWithoutAgentsInput } from '../agent-rebate/agent-rebate-create-nested-many-without-agents.input';
import { AgentCreateNestedOneWithoutChildrenInput } from './agent-create-nested-one-without-children.input';
import { AgentCreateNestedManyWithoutParentInput } from './agent-create-nested-many-without-parent.input';

@InputType()
export class AgentCreateWithoutPlayersInput {

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

    @Field(() => AgentRebateCreateNestedManyWithoutAgentsInput, {nullable:true})
    agent_rebates?: AgentRebateCreateNestedManyWithoutAgentsInput;

    @Field(() => AgentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: AgentCreateNestedOneWithoutChildrenInput;

    @Field(() => AgentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: AgentCreateNestedManyWithoutParentInput;
}
