import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUncheckedCreateNestedManyWithoutAgentInput } from '../players/players-unchecked-create-nested-many-without-agent.input';
import { agentsUncheckedCreateNestedManyWithoutParentInput } from './agents-unchecked-create-nested-many-without-parent.input';

@InputType()
export class agentsUncheckedCreateWithoutAgent_rebatesInput {

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

    @Field(() => playersUncheckedCreateNestedManyWithoutAgentInput, {nullable:true})
    players?: playersUncheckedCreateNestedManyWithoutAgentInput;

    @Field(() => agentsUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: agentsUncheckedCreateNestedManyWithoutParentInput;
}
