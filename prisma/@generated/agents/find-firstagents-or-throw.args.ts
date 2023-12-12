import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsOrderByWithRelationInput } from './agents-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AgentsScalarFieldEnum } from '../prisma/agents-scalar-field.enum';

@ArgsType()
export class FindFirstagentsOrThrowArgs {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => [agentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<agentsOrderByWithRelationInput>;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AgentsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AgentsScalarFieldEnum>;
}
