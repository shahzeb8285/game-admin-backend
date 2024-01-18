import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateInput } from './agent-create.input';
import { AgentUpdateInput } from './agent-update.input';

@ArgsType()
export class UpsertOneAgentArgs {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: AgentWhereUniqueInput;

    @Field(() => AgentCreateInput, {nullable:false})
    @Type(() => AgentCreateInput)
    create!: AgentCreateInput;

    @Field(() => AgentUpdateInput, {nullable:false})
    @Type(() => AgentUpdateInput)
    update!: AgentUpdateInput;
}
