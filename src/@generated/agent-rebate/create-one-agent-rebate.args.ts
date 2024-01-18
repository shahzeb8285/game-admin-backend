import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateCreateInput } from './agent-rebate-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAgentRebateArgs {

    @Field(() => AgentRebateCreateInput, {nullable:false})
    @Type(() => AgentRebateCreateInput)
    data!: AgentRebateCreateInput;
}
