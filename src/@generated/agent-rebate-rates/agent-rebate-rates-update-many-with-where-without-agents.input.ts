import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebate_ratesScalarWhereInput } from './agent-rebate-rates-scalar-where.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesUpdateManyMutationInput } from './agent-rebate-rates-update-many-mutation.input';

@InputType()
export class agent_rebate_ratesUpdateManyWithWhereWithoutAgentsInput {

    @Field(() => agent_rebate_ratesScalarWhereInput, {nullable:false})
    @Type(() => agent_rebate_ratesScalarWhereInput)
    where!: agent_rebate_ratesScalarWhereInput;

    @Field(() => agent_rebate_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => agent_rebate_ratesUpdateManyMutationInput)
    data!: agent_rebate_ratesUpdateManyMutationInput;
}
