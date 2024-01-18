import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentUpdateWithoutChildrenInput } from './agent-update-without-children.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutChildrenInput } from './agent-create-without-children.input';
import { AgentWhereInput } from './agent-where.input';

@InputType()
export class AgentUpsertWithoutChildrenInput {

    @Field(() => AgentUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => AgentUpdateWithoutChildrenInput)
    update!: AgentUpdateWithoutChildrenInput;

    @Field(() => AgentCreateWithoutChildrenInput, {nullable:false})
    @Type(() => AgentCreateWithoutChildrenInput)
    create!: AgentCreateWithoutChildrenInput;

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;
}
