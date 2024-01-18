import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutParentInput } from './agent-create-without-parent.input';

@InputType()
export class AgentCreateOrConnectWithoutParentInput {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: AgentWhereUniqueInput;

    @Field(() => AgentCreateWithoutParentInput, {nullable:false})
    @Type(() => AgentCreateWithoutParentInput)
    create!: AgentCreateWithoutParentInput;
}
