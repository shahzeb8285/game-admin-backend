import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesWhereInput } from '../agent-shares/agent-shares-where.input';
import { Type } from 'class-transformer';
import { agent_sharesOrderByWithAggregationInput } from '../agent-shares/agent-shares-order-by-with-aggregation.input';
import { Agent_sharesScalarFieldEnum } from './agent-shares-scalar-field.enum';
import { agent_sharesScalarWhereWithAggregatesInput } from '../agent-shares/agent-shares-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByagentSharesArgs {

    @Field(() => agent_sharesWhereInput, {nullable:true})
    @Type(() => agent_sharesWhereInput)
    where?: agent_sharesWhereInput;

    @Field(() => [agent_sharesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<agent_sharesOrderByWithAggregationInput>;

    @Field(() => [Agent_sharesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Agent_sharesScalarFieldEnum>;

    @Field(() => agent_sharesScalarWhereWithAggregatesInput, {nullable:true})
    having?: agent_sharesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
