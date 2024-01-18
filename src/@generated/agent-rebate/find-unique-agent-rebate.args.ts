import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAgentRebateArgs {

    @Field(() => AgentRebateWhereUniqueInput, {nullable:false})
    @Type(() => AgentRebateWhereUniqueInput)
    where!: Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>;
}
