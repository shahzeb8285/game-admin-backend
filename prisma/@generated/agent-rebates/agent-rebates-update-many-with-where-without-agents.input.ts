import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebatesScalarWhereInput } from './agent-rebates-scalar-where.input';
import { Type } from 'class-transformer';
import { agent_rebatesUpdateManyMutationInput } from './agent-rebates-update-many-mutation.input';

@InputType()
export class agent_rebatesUpdateManyWithWhereWithoutAgentsInput {

    @Field(() => agent_rebatesScalarWhereInput, {nullable:false})
    @Type(() => agent_rebatesScalarWhereInput)
    where!: agent_rebatesScalarWhereInput;

    @Field(() => agent_rebatesUpdateManyMutationInput, {nullable:false})
    @Type(() => agent_rebatesUpdateManyMutationInput)
    data!: agent_rebatesUpdateManyMutationInput;
}
