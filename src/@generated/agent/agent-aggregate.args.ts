import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';
import { Type } from 'class-transformer';
import { AgentOrderByWithRelationInput } from './agent-order-by-with-relation.input';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AgentCountAggregateInput } from './agent-count-aggregate.input';
import { AgentMinAggregateInput } from './agent-min-aggregate.input';
import { AgentMaxAggregateInput } from './agent-max-aggregate.input';

@ArgsType()
export class AgentAggregateArgs {

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;

    @Field(() => [AgentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AgentOrderByWithRelationInput>;

    @Field(() => AgentWhereUniqueInput, {nullable:true})
    cursor?: AgentWhereUniqueInput;

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
