import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUncheckedUpdateManyWithoutAgentNestedInput } from '../player/player-unchecked-update-many-without-agent-nested.input';
import { AgentUncheckedUpdateManyWithoutParentNestedInput } from './agent-unchecked-update-many-without-parent-nested.input';

@InputType()
export class AgentUncheckedUpdateWithoutAgent_rebatesInput {

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

    @Field(() => String, {nullable:true})
    parent_agent_id?: string;

    @Field(() => PlayerUncheckedUpdateManyWithoutAgentNestedInput, {nullable:true})
    players?: PlayerUncheckedUpdateManyWithoutAgentNestedInput;

    @Field(() => AgentUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: AgentUncheckedUpdateManyWithoutParentNestedInput;
}
