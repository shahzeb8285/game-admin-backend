import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateWhereInput } from './agent-rebate-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAgentRebateArgs {

    @Field(() => AgentRebateWhereInput, {nullable:true})
    @Type(() => AgentRebateWhereInput)
    where?: AgentRebateWhereInput;
}
