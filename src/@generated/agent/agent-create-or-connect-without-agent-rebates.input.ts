import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutAgent_rebatesInput } from './agent-create-without-agent-rebates.input';

@InputType()
export class AgentCreateOrConnectWithoutAgent_rebatesInput {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: AgentWhereUniqueInput;

    @Field(() => AgentCreateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => AgentCreateWithoutAgent_rebatesInput)
    create!: AgentCreateWithoutAgent_rebatesInput;
}
