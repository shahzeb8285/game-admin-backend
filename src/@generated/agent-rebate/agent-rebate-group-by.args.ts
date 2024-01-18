import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateWhereInput } from './agent-rebate-where.input';
import { Type } from 'class-transformer';
import { AgentRebateOrderByWithAggregationInput } from './agent-rebate-order-by-with-aggregation.input';
import { AgentRebateScalarFieldEnum } from './agent-rebate-scalar-field.enum';
import { AgentRebateScalarWhereWithAggregatesInput } from './agent-rebate-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AgentRebateCountAggregateInput } from './agent-rebate-count-aggregate.input';
import { AgentRebateAvgAggregateInput } from './agent-rebate-avg-aggregate.input';
import { AgentRebateSumAggregateInput } from './agent-rebate-sum-aggregate.input';
import { AgentRebateMinAggregateInput } from './agent-rebate-min-aggregate.input';
import { AgentRebateMaxAggregateInput } from './agent-rebate-max-aggregate.input';

@ArgsType()
export class AgentRebateGroupByArgs {

    @Field(() => AgentRebateWhereInput, {nullable:true})
    @Type(() => AgentRebateWhereInput)
    where?: AgentRebateWhereInput;

    @Field(() => [AgentRebateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AgentRebateOrderByWithAggregationInput>;

    @Field(() => [AgentRebateScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AgentRebateScalarFieldEnum>;

    @Field(() => AgentRebateScalarWhereWithAggregatesInput, {nullable:true})
    having?: AgentRebateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AgentRebateCountAggregateInput, {nullable:true})
    _count?: AgentRebateCountAggregateInput;

    @Field(() => AgentRebateAvgAggregateInput, {nullable:true})
    _avg?: AgentRebateAvgAggregateInput;

    @Field(() => AgentRebateSumAggregateInput, {nullable:true})
    _sum?: AgentRebateSumAggregateInput;

    @Field(() => AgentRebateMinAggregateInput, {nullable:true})
    _min?: AgentRebateMinAggregateInput;

    @Field(() => AgentRebateMaxAggregateInput, {nullable:true})
    _max?: AgentRebateMaxAggregateInput;
}
