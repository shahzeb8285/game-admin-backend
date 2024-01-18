import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentScalarWhereInput } from './agent-scalar-where.input';
import { Type } from 'class-transformer';
import { AgentUpdateManyMutationInput } from './agent-update-many-mutation.input';

@InputType()
export class AgentUpdateManyWithWhereWithoutParentInput {

    @Field(() => AgentScalarWhereInput, {nullable:false})
    @Type(() => AgentScalarWhereInput)
    where!: AgentScalarWhereInput;

    @Field(() => AgentUpdateManyMutationInput, {nullable:false})
    @Type(() => AgentUpdateManyMutationInput)
    data!: AgentUpdateManyMutationInput;
}
