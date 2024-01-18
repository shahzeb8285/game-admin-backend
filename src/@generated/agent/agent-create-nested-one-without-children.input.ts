import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateWithoutChildrenInput } from './agent-create-without-children.input';
import { Type } from 'class-transformer';
import { AgentCreateOrConnectWithoutChildrenInput } from './agent-create-or-connect-without-children.input';
import { AgentWhereUniqueInput } from './agent-where-unique.input';

@InputType()
export class AgentCreateNestedOneWithoutChildrenInput {

    @Field(() => AgentCreateWithoutChildrenInput, {nullable:true})
    @Type(() => AgentCreateWithoutChildrenInput)
    create?: AgentCreateWithoutChildrenInput;

    @Field(() => AgentCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => AgentCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: AgentCreateOrConnectWithoutChildrenInput;

    @Field(() => AgentWhereUniqueInput, {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    connect?: AgentWhereUniqueInput;
}
