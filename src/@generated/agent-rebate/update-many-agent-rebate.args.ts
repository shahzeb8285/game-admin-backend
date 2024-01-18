import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateUpdateManyMutationInput } from './agent-rebate-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AgentRebateWhereInput } from './agent-rebate-where.input';

@ArgsType()
export class UpdateManyAgentRebateArgs {

    @Field(() => AgentRebateUpdateManyMutationInput, {nullable:false})
    @Type(() => AgentRebateUpdateManyMutationInput)
    data!: AgentRebateUpdateManyMutationInput;

    @Field(() => AgentRebateWhereInput, {nullable:true})
    @Type(() => AgentRebateWhereInput)
    where?: AgentRebateWhereInput;
}
