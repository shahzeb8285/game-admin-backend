import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAgentArgs {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: AgentWhereUniqueInput;
}
