import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateUpdateInput } from './agent-rebate-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';

@ArgsType()
export class UpdateOneAgentRebateArgs {

    @Field(() => AgentRebateUpdateInput, {nullable:false})
    @Type(() => AgentRebateUpdateInput)
    data!: AgentRebateUpdateInput;

    @Field(() => AgentRebateWhereUniqueInput, {nullable:false})
    @Type(() => AgentRebateWhereUniqueInput)
    where!: Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>;
}