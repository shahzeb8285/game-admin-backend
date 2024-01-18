import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentRebateUpdateManyWithoutAgentsNestedInput } from '../agent-rebate/agent-rebate-update-many-without-agents-nested.input';
import { AgentUpdateOneWithoutChildrenNestedInput } from './agent-update-one-without-children-nested.input';
import { AgentUpdateManyWithoutParentNestedInput } from './agent-update-many-without-parent-nested.input';

@InputType()
export class AgentUpdateWithoutPlayersInput {

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

    @Field(() => AgentRebateUpdateManyWithoutAgentsNestedInput, {nullable:true})
    agent_rebates?: AgentRebateUpdateManyWithoutAgentsNestedInput;

    @Field(() => AgentUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: AgentUpdateOneWithoutChildrenNestedInput;

    @Field(() => AgentUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: AgentUpdateManyWithoutParentNestedInput;
}
