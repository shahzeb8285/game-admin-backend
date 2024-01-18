import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutChildrenInput } from './agent-create-without-children.input';

@InputType()
export class AgentCreateOrConnectWithoutChildrenInput {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => AgentCreateWithoutChildrenInput, {nullable:false})
    @Type(() => AgentCreateWithoutChildrenInput)
    create!: AgentCreateWithoutChildrenInput;
}
