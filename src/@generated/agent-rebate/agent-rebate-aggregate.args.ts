import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateWhereInput } from './agent-rebate-where.input';
import { Type } from 'class-transformer';
import { AgentRebateOrderByWithRelationInput } from './agent-rebate-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AgentRebateCountAggregateInput } from './agent-rebate-count-aggregate.input';
import { AgentRebateAvgAggregateInput } from './agent-rebate-avg-aggregate.input';
import { AgentRebateSumAggregateInput } from './agent-rebate-sum-aggregate.input';
import { AgentRebateMinAggregateInput } from './agent-rebate-min-aggregate.input';
import { AgentRebateMaxAggregateInput } from './agent-rebate-max-aggregate.input';

@ArgsType()
export class AgentRebateAggregateArgs {

    @Field(() => AgentRebateWhereInput, {nullable:true})
    @Type(() => AgentRebateWhereInput)
    where?: AgentRebateWhereInput;

    @Field(() => [AgentRebateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AgentRebateOrderByWithRelationInput>;

    @Field(() => AgentRebateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>;

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
