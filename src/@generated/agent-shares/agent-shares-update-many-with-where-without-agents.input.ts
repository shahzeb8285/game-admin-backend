import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_sharesScalarWhereInput } from './agent-shares-scalar-where.input';
import { Type } from 'class-transformer';
import { agent_sharesUpdateManyMutationInput } from './agent-shares-update-many-mutation.input';

@InputType()
export class agent_sharesUpdateManyWithWhereWithoutAgentsInput {

    @Field(() => agent_sharesScalarWhereInput, {nullable:false})
    @Type(() => agent_sharesScalarWhereInput)
    where!: agent_sharesScalarWhereInput;

    @Field(() => agent_sharesUpdateManyMutationInput, {nullable:false})
    @Type(() => agent_sharesUpdateManyMutationInput)
    data!: agent_sharesUpdateManyMutationInput;
}
