import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentUpdateManyMutationInput } from './agent-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AgentWhereInput } from './agent-where.input';

@ArgsType()
export class UpdateManyAgentArgs {

    @Field(() => AgentUpdateManyMutationInput, {nullable:false})
    @Type(() => AgentUpdateManyMutationInput)
    data!: AgentUpdateManyMutationInput;

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;
}
