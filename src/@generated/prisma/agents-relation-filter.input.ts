import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from '../agents/agents-where.input';

@InputType()
export class AgentsRelationFilter {

    @Field(() => agentsWhereInput, {nullable:true})
    is?: agentsWhereInput;

    @Field(() => agentsWhereInput, {nullable:true})
    isNot?: agentsWhereInput;
}
