import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsOrderByWithAggregationInput } from './agents-order-by-with-aggregation.input';
import { AgentsScalarFieldEnum } from '../prisma/agents-scalar-field.enum';
import { agentsScalarWhereWithAggregatesInput } from './agents-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class agentsGroupByArgs {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => [agentsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<agentsOrderByWithAggregationInput>;

    @Field(() => [AgentsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AgentsScalarFieldEnum>;

    @Field(() => agentsScalarWhereWithAggregatesInput, {nullable:true})
    having?: agentsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
