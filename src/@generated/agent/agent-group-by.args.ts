import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';
import { Type } from 'class-transformer';
import { AgentOrderByWithAggregationInput } from './agent-order-by-with-aggregation.input';
import { AgentScalarFieldEnum } from './agent-scalar-field.enum';
import { AgentScalarWhereWithAggregatesInput } from './agent-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AgentCountAggregateInput } from './agent-count-aggregate.input';
import { AgentMinAggregateInput } from './agent-min-aggregate.input';
import { AgentMaxAggregateInput } from './agent-max-aggregate.input';

@ArgsType()
export class AgentGroupByArgs {

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;

    @Field(() => [AgentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AgentOrderByWithAggregationInput>;

    @Field(() => [AgentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AgentScalarFieldEnum>;

    @Field(() => AgentScalarWhereWithAggregatesInput, {nullable:true})
    having?: AgentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AgentCountAggregateInput, {nullable:true})
    _count?: AgentCountAggregateInput;

    @Field(() => AgentMinAggregateInput, {nullable:true})
    _min?: AgentMinAggregateInput;

    @Field(() => AgentMaxAggregateInput, {nullable:true})
    _max?: AgentMaxAggregateInput;
}
