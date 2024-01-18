import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentRebateScalarWhereInput } from './agent-rebate-scalar-where.input';
import { Type } from 'class-transformer';
import { AgentRebateUpdateManyMutationInput } from './agent-rebate-update-many-mutation.input';

@InputType()
export class AgentRebateUpdateManyWithWhereWithoutAgentsInput {

    @Field(() => AgentRebateScalarWhereInput, {nullable:false})
    @Type(() => AgentRebateScalarWhereInput)
    where!: AgentRebateScalarWhereInput;

    @Field(() => AgentRebateUpdateManyMutationInput, {nullable:false})
    @Type(() => AgentRebateUpdateManyMutationInput)
    data!: AgentRebateUpdateManyMutationInput;
}
