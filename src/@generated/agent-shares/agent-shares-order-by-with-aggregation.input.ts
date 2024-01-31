import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { agent_sharesCountOrderByAggregateInput } from './agent-shares-count-order-by-aggregate.input';
import { agent_sharesAvgOrderByAggregateInput } from './agent-shares-avg-order-by-aggregate.input';
import { agent_sharesMaxOrderByAggregateInput } from './agent-shares-max-order-by-aggregate.input';
import { agent_sharesMinOrderByAggregateInput } from './agent-shares-min-order-by-aggregate.input';
import { agent_sharesSumOrderByAggregateInput } from './agent-shares-sum-order-by-aggregate.input';

@InputType()
export class agent_sharesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_share_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shares?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_active?: keyof typeof SortOrder;

    @Field(() => agent_sharesCountOrderByAggregateInput, {nullable:true})
    _count?: agent_sharesCountOrderByAggregateInput;

    @Field(() => agent_sharesAvgOrderByAggregateInput, {nullable:true})
    _avg?: agent_sharesAvgOrderByAggregateInput;

    @Field(() => agent_sharesMaxOrderByAggregateInput, {nullable:true})
    _max?: agent_sharesMaxOrderByAggregateInput;

    @Field(() => agent_sharesMinOrderByAggregateInput, {nullable:true})
    _min?: agent_sharesMinOrderByAggregateInput;

    @Field(() => agent_sharesSumOrderByAggregateInput, {nullable:true})
    _sum?: agent_sharesSumOrderByAggregateInput;
}
