import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebatesWhereInput } from '../agent-rebates/agent-rebates-where.input';

@InputType()
export class Agent_rebatesListRelationFilter {

    @Field(() => agent_rebatesWhereInput, {nullable:true})
    every?: agent_rebatesWhereInput;

    @Field(() => agent_rebatesWhereInput, {nullable:true})
    some?: agent_rebatesWhereInput;

    @Field(() => agent_rebatesWhereInput, {nullable:true})
    none?: agent_rebatesWhereInput;
}
