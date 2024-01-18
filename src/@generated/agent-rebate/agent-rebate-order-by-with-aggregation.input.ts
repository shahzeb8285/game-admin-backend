import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AgentRebateCountOrderByAggregateInput } from './agent-rebate-count-order-by-aggregate.input';
import { AgentRebateAvgOrderByAggregateInput } from './agent-rebate-avg-order-by-aggregate.input';
import { AgentRebateMaxOrderByAggregateInput } from './agent-rebate-max-order-by-aggregate.input';
import { AgentRebateMinOrderByAggregateInput } from './agent-rebate-min-order-by-aggregate.input';
import { AgentRebateSumOrderByAggregateInput } from './agent-rebate-sum-order-by-aggregate.input';

@InputType()
export class AgentRebateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_rebate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thru_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_active?: keyof typeof SortOrder;

    @Field(() => AgentRebateCountOrderByAggregateInput, {nullable:true})
    _count?: AgentRebateCountOrderByAggregateInput;

    @Field(() => AgentRebateAvgOrderByAggregateInput, {nullable:true})
    _avg?: AgentRebateAvgOrderByAggregateInput;

    @Field(() => AgentRebateMaxOrderByAggregateInput, {nullable:true})
    _max?: AgentRebateMaxOrderByAggregateInput;

    @Field(() => AgentRebateMinOrderByAggregateInput, {nullable:true})
    _min?: AgentRebateMinOrderByAggregateInput;

    @Field(() => AgentRebateSumOrderByAggregateInput, {nullable:true})
    _sum?: AgentRebateSumOrderByAggregateInput;
}
