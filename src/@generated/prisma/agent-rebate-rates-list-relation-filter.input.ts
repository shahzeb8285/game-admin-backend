import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebate_ratesWhereInput } from '../agent-rebate-rates/agent-rebate-rates-where.input';

@InputType()
export class Agent_rebate_ratesListRelationFilter {

    @Field(() => agent_rebate_ratesWhereInput, {nullable:true})
    every?: agent_rebate_ratesWhereInput;

    @Field(() => agent_rebate_ratesWhereInput, {nullable:true})
    some?: agent_rebate_ratesWhereInput;

    @Field(() => agent_rebate_ratesWhereInput, {nullable:true})
    none?: agent_rebate_ratesWhereInput;
}
