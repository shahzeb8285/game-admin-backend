import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutAgent_rebatesInput } from './agent-create-without-agent-rebates.input';

@InputType()
export class AgentCreateOrConnectWithoutAgent_rebatesInput {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => AgentCreateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => AgentCreateWithoutAgent_rebatesInput)
    create!: AgentCreateWithoutAgent_rebatesInput;
}
