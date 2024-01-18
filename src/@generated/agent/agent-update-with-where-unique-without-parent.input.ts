import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentUpdateWithoutParentInput } from './agent-update-without-parent.input';

@InputType()
export class AgentUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => AgentUpdateWithoutParentInput, {nullable:false})
    @Type(() => AgentUpdateWithoutParentInput)
    data!: AgentUpdateWithoutParentInput;
}
