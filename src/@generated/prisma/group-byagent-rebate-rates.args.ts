import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesWhereInput } from '../agent-rebate-rates/agent-rebate-rates-where.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesOrderByWithAggregationInput } from '../agent-rebate-rates/agent-rebate-rates-order-by-with-aggregation.input';
import { Agent_rebate_ratesScalarFieldEnum } from './agent-rebate-rates-scalar-field.enum';
import { agent_rebate_ratesScalarWhereWithAggregatesInput } from '../agent-rebate-rates/agent-rebate-rates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByagentRebateRatesArgs {

    @Field(() => agent_rebate_ratesWhereInput, {nullable:true})
    @Type(() => agent_rebate_ratesWhereInput)
    where?: agent_rebate_ratesWhereInput;

    @Field(() => [agent_rebate_ratesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<agent_rebate_ratesOrderByWithAggregationInput>;

    @Field(() => [Agent_rebate_ratesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Agent_rebate_ratesScalarFieldEnum>;

    @Field(() => agent_rebate_ratesScalarWhereWithAggregatesInput, {nullable:true})
    having?: agent_rebate_ratesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
