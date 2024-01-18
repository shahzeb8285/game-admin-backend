import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from '../agents/agents-where.input';

@InputType()
export class AgentsListRelationFilter {

    @Field(() => agentsWhereInput, {nullable:true})
    every?: agentsWhereInput;

    @Field(() => agentsWhereInput, {nullable:true})
    some?: agentsWhereInput;

    @Field(() => agentsWhereInput, {nullable:true})
    none?: agentsWhereInput;
}
