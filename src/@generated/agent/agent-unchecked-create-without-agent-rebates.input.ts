import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUncheckedCreateNestedManyWithoutAgentInput } from '../player/player-unchecked-create-nested-many-without-agent.input';
import { AgentUncheckedCreateNestedManyWithoutParentInput } from './agent-unchecked-create-nested-many-without-parent.input';

@InputType()
export class AgentUncheckedCreateWithoutAgent_rebatesInput {

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

    @Field(() => String, {nullable:true})
    parent_agent_id?: string;

    @Field(() => PlayerUncheckedCreateNestedManyWithoutAgentInput, {nullable:true})
    players?: PlayerUncheckedCreateNestedManyWithoutAgentInput;

    @Field(() => AgentUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: AgentUncheckedCreateNestedManyWithoutParentInput;
}