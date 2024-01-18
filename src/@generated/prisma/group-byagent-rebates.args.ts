import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesWhereInput } from '../agent-rebates/agent-rebates-where.input';
import { Type } from 'class-transformer';
import { agent_rebatesOrderByWithAggregationInput } from '../agent-rebates/agent-rebates-order-by-with-aggregation.input';
import { Agent_rebatesScalarFieldEnum } from './agent-rebates-scalar-field.enum';
import { agent_rebatesScalarWhereWithAggregatesInput } from '../agent-rebates/agent-rebates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByagentRebatesArgs {

    @Field(() => agent_rebatesWhereInput, {nullable:true})
    @Type(() => agent_rebatesWhereInput)
    where?: agent_rebatesWhereInput;

    @Field(() => [agent_rebatesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<agent_rebatesOrderByWithAggregationInput>;

    @Field(() => [Agent_rebatesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Agent_rebatesScalarFieldEnum>;

    @Field(() => agent_rebatesScalarWhereWithAggregatesInput, {nullable:true})
    having?: agent_rebatesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
