import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereInput } from '../agent/agent-where.input';

@InputType()
export class AgentNullableRelationFilter {

    @Field(() => AgentWhereInput, {nullable:true})
    is?: AgentWhereInput;

    @Field(() => AgentWhereInput, {nullable:true})
    isNot?: AgentWhereInput;
}
