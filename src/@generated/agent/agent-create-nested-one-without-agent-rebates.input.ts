import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateWithoutAgent_rebatesInput } from './agent-create-without-agent-rebates.input';
import { Type } from 'class-transformer';
import { AgentCreateOrConnectWithoutAgent_rebatesInput } from './agent-create-or-connect-without-agent-rebates.input';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';

@InputType()
export class AgentCreateNestedOneWithoutAgent_rebatesInput {

    @Field(() => AgentCreateWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => AgentCreateWithoutAgent_rebatesInput)
    create?: AgentCreateWithoutAgent_rebatesInput;

    @Field(() => AgentCreateOrConnectWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => AgentCreateOrConnectWithoutAgent_rebatesInput)
    connectOrCreate?: AgentCreateOrConnectWithoutAgent_rebatesInput;

    @Field(() => AgentWhereUniqueInput, {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    connect?: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;
}
