import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateWithoutPlayersInput } from './agent-create-without-players.input';
import { Type } from 'class-transformer';
import { AgentCreateOrConnectWithoutPlayersInput } from './agent-create-or-connect-without-players.input';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';

@InputType()
export class AgentCreateNestedOneWithoutPlayersInput {

    @Field(() => AgentCreateWithoutPlayersInput, {nullable:true})
    @Type(() => AgentCreateWithoutPlayersInput)
    create?: AgentCreateWithoutPlayersInput;

    @Field(() => AgentCreateOrConnectWithoutPlayersInput, {nullable:true})
    @Type(() => AgentCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: AgentCreateOrConnectWithoutPlayersInput;

    @Field(() => AgentWhereUniqueInput, {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    connect?: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;
}
