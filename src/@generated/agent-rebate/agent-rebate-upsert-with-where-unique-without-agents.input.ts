import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { Type } from 'class-transformer';
import { AgentRebateUpdateWithoutAgentsInput } from './agent-rebate-update-without-agents.input';
import { AgentRebateCreateWithoutAgentsInput } from './agent-rebate-create-without-agents.input';

@InputType()
export class AgentRebateUpsertWithWhereUniqueWithoutAgentsInput {

    @Field(() => AgentRebateWhereUniqueInput, {nullable:false})
    @Type(() => AgentRebateWhereUniqueInput)
    where!: Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>;

    @Field(() => AgentRebateUpdateWithoutAgentsInput, {nullable:false})
    @Type(() => AgentRebateUpdateWithoutAgentsInput)
    update!: AgentRebateUpdateWithoutAgentsInput;

    @Field(() => AgentRebateCreateWithoutAgentsInput, {nullable:false})
    @Type(() => AgentRebateCreateWithoutAgentsInput)
    create!: AgentRebateCreateWithoutAgentsInput;
}
