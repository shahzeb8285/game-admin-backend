import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutPlayersInput } from './agent-create-without-players.input';

@InputType()
export class AgentCreateOrConnectWithoutPlayersInput {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => AgentCreateWithoutPlayersInput, {nullable:false})
    @Type(() => AgentCreateWithoutPlayersInput)
    create!: AgentCreateWithoutPlayersInput;
}
