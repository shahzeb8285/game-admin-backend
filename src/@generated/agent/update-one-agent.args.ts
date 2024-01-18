import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentUpdateInput } from './agent-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';

@ArgsType()
export class UpdateOneAgentArgs {

    @Field(() => AgentUpdateInput, {nullable:false})
    @Type(() => AgentUpdateInput)
    data!: AgentUpdateInput;

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;
}
