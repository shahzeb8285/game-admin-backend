import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAgentRebateOrThrowArgs {

    @Field(() => AgentRebateWhereUniqueInput, {nullable:false})
    @Type(() => AgentRebateWhereUniqueInput)
    where!: AgentRebateWhereUniqueInput;
}
