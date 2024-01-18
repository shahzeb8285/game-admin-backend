import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateWithoutChildrenInput } from './agent-create-without-children.input';
import { Type } from 'class-transformer';
import { AgentCreateOrConnectWithoutChildrenInput } from './agent-create-or-connect-without-children.input';
import { AgentUpsertWithoutChildrenInput } from './agent-upsert-without-children.input';
import { AgentWhereInput } from './agent-where.input';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { AgentUpdateToOneWithWhereWithoutChildrenInput } from './agent-update-to-one-with-where-without-children.input';

@InputType()
export class AgentUpdateOneWithoutChildrenNestedInput {

    @Field(() => AgentCreateWithoutChildrenInput, {nullable:true})
    @Type(() => AgentCreateWithoutChildrenInput)
    create?: AgentCreateWithoutChildrenInput;

    @Field(() => AgentCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => AgentCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: AgentCreateOrConnectWithoutChildrenInput;

    @Field(() => AgentUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => AgentUpsertWithoutChildrenInput)
    upsert?: AgentUpsertWithoutChildrenInput;

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    disconnect?: AgentWhereInput;

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    delete?: AgentWhereInput;

    @Field(() => AgentWhereUniqueInput, {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    connect?: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => AgentUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => AgentUpdateToOneWithWhereWithoutChildrenInput)
    update?: AgentUpdateToOneWithWhereWithoutChildrenInput;
}
