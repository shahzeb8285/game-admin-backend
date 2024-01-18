import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';
import { Type } from 'class-transformer';
import { AgentUpdateWithoutChildrenInput } from './agent-update-without-children.input';

@InputType()
export class AgentUpdateToOneWithWhereWithoutChildrenInput {

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;

    @Field(() => AgentUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => AgentUpdateWithoutChildrenInput)
    data!: AgentUpdateWithoutChildrenInput;
}
