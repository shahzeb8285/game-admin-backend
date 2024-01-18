import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';
import { Type } from 'class-transformer';
import { AgentOrderByWithRelationInput } from './agent-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AgentScalarFieldEnum } from './agent-scalar-field.enum';

@ArgsType()
export class FindFirstAgentOrThrowArgs {

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;

    @Field(() => [AgentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AgentOrderByWithRelationInput>;

    @Field(() => AgentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AgentWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AgentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AgentScalarFieldEnum>;
}
