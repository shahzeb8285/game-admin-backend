import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutChildrenInput } from './agent-create-without-children.input';

@InputType()
export class AgentCreateOrConnectWithoutChildrenInput {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: AgentWhereUniqueInput;

    @Field(() => AgentCreateWithoutChildrenInput, {nullable:false})
    @Type(() => AgentCreateWithoutChildrenInput)
    create!: AgentCreateWithoutChildrenInput;
}
