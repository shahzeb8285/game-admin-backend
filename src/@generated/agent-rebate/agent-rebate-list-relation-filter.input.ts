import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentRebateWhereInput } from './agent-rebate-where.input';

@InputType()
export class AgentRebateListRelationFilter {

    @Field(() => AgentRebateWhereInput, {nullable:true})
    every?: AgentRebateWhereInput;

    @Field(() => AgentRebateWhereInput, {nullable:true})
    some?: AgentRebateWhereInput;

    @Field(() => AgentRebateWhereInput, {nullable:true})
    none?: AgentRebateWhereInput;
}
