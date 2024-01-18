import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { Type } from 'class-transformer';
import { AgentRebateCreateWithoutAgentsInput } from './agent-rebate-create-without-agents.input';

@InputType()
export class AgentRebateCreateOrConnectWithoutAgentsInput {

    @Field(() => AgentRebateWhereUniqueInput, {nullable:false})
    @Type(() => AgentRebateWhereUniqueInput)
    where!: Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>;

    @Field(() => AgentRebateCreateWithoutAgentsInput, {nullable:false})
    @Type(() => AgentRebateCreateWithoutAgentsInput)
    create!: AgentRebateCreateWithoutAgentsInput;
}
