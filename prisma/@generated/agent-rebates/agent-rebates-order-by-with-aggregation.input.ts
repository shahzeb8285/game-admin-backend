import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { agent_rebatesCountOrderByAggregateInput } from './agent-rebates-count-order-by-aggregate.input';
import { agent_rebatesAvgOrderByAggregateInput } from './agent-rebates-avg-order-by-aggregate.input';
import { agent_rebatesMaxOrderByAggregateInput } from './agent-rebates-max-order-by-aggregate.input';
import { agent_rebatesMinOrderByAggregateInput } from './agent-rebates-min-order-by-aggregate.input';
import { agent_rebatesSumOrderByAggregateInput } from './agent-rebates-sum-order-by-aggregate.input';

@InputType()
export class agent_rebatesOrderByWithAggregationInput {

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

    @Field(() => agent_rebatesCountOrderByAggregateInput, {nullable:true})
    _count?: agent_rebatesCountOrderByAggregateInput;

    @Field(() => agent_rebatesAvgOrderByAggregateInput, {nullable:true})
    _avg?: agent_rebatesAvgOrderByAggregateInput;

    @Field(() => agent_rebatesMaxOrderByAggregateInput, {nullable:true})
    _max?: agent_rebatesMaxOrderByAggregateInput;

    @Field(() => agent_rebatesMinOrderByAggregateInput, {nullable:true})
    _min?: agent_rebatesMinOrderByAggregateInput;

    @Field(() => agent_rebatesSumOrderByAggregateInput, {nullable:true})
    _sum?: agent_rebatesSumOrderByAggregateInput;
}
