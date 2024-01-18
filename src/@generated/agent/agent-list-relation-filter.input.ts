import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';

@InputType()
export class AgentListRelationFilter {

    @Field(() => AgentWhereInput, {nullable:true})
    every?: AgentWhereInput;

    @Field(() => AgentWhereInput, {nullable:true})
    some?: AgentWhereInput;

    @Field(() => AgentWhereInput, {nullable:true})
    none?: AgentWhereInput;
}
