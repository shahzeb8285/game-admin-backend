import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentCreateInput } from './agent-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAgentArgs {

    @Field(() => AgentCreateInput, {nullable:false})
    @Type(() => AgentCreateInput)
    data!: AgentCreateInput;
}
