import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAgentArgs {

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;
}
