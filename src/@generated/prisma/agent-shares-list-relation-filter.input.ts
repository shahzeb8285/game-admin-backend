import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_sharesWhereInput } from '../agent-shares/agent-shares-where.input';

@InputType()
export class Agent_sharesListRelationFilter {

    @Field(() => agent_sharesWhereInput, {nullable:true})
    every?: agent_sharesWhereInput;

    @Field(() => agent_sharesWhereInput, {nullable:true})
    some?: agent_sharesWhereInput;

    @Field(() => agent_sharesWhereInput, {nullable:true})
    none?: agent_sharesWhereInput;
}
