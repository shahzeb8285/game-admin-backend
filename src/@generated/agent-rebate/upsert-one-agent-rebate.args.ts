import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { Type } from 'class-transformer';
import { AgentRebateCreateInput } from './agent-rebate-create.input';
import { AgentRebateUpdateInput } from './agent-rebate-update.input';

@ArgsType()
export class UpsertOneAgentRebateArgs {

    @Field(() => AgentRebateWhereUniqueInput, {nullable:false})
    @Type(() => AgentRebateWhereUniqueInput)
    where!: AgentRebateWhereUniqueInput;

    @Field(() => AgentRebateCreateInput, {nullable:false})
    @Type(() => AgentRebateCreateInput)
    create!: AgentRebateCreateInput;

    @Field(() => AgentRebateUpdateInput, {nullable:false})
    @Type(() => AgentRebateUpdateInput)
    update!: AgentRebateUpdateInput;
}
