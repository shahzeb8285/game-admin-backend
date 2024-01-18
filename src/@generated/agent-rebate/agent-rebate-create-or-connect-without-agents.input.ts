import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { Type } from 'class-transformer';
import { AgentRebateCreateWithoutAgentsInput } from './agent-rebate-create-without-agents.input';

@InputType()
export class AgentRebateCreateOrConnectWithoutAgentsInput {

    @Field(() => AgentRebateWhereUniqueInput, {nullable:false})
    @Type(() => AgentRebateWhereUniqueInput)
    where!: AgentRebateWhereUniqueInput;

    @Field(() => AgentRebateCreateWithoutAgentsInput, {nullable:false})
    @Type(() => AgentRebateCreateWithoutAgentsInput)
    create!: AgentRebateCreateWithoutAgentsInput;
}
