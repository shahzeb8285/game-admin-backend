import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateInput } from './agent-create.input';
import { AgentUpdateInput } from './agent-update.input';

@ArgsType()
export class UpsertOneAgentArgs {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => AgentCreateInput, {nullable:false})
    @Type(() => AgentCreateInput)
    create!: AgentCreateInput;

    @Field(() => AgentUpdateInput, {nullable:false})
    @Type(() => AgentUpdateInput)
    update!: AgentUpdateInput;
}
