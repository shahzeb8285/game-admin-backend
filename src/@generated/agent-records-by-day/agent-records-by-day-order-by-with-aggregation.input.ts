import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { agent_records_by_dayCountOrderByAggregateInput } from './agent-records-by-day-count-order-by-aggregate.input';
import { agent_records_by_dayAvgOrderByAggregateInput } from './agent-records-by-day-avg-order-by-aggregate.input';
import { agent_records_by_dayMaxOrderByAggregateInput } from './agent-records-by-day-max-order-by-aggregate.input';
import { agent_records_by_dayMinOrderByAggregateInput } from './agent-records-by-day-min-order-by-aggregate.input';
import { agent_records_by_daySumOrderByAggregateInput } from './agent-records-by-day-sum-order-by-aggregate.input';

@InputType()
export class agent_records_by_dayOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_records_by_day_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_records_by_day_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    child_agent_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    effective_bet_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_income?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_expense?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_pnl_income?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_pnl_expense?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_active?: keyof typeof SortOrder;

    @Field(() => agent_records_by_dayCountOrderByAggregateInput, {nullable:true})
    _count?: agent_records_by_dayCountOrderByAggregateInput;

    @Field(() => agent_records_by_dayAvgOrderByAggregateInput, {nullable:true})
    _avg?: agent_records_by_dayAvgOrderByAggregateInput;

    @Field(() => agent_records_by_dayMaxOrderByAggregateInput, {nullable:true})
    _max?: agent_records_by_dayMaxOrderByAggregateInput;

    @Field(() => agent_records_by_dayMinOrderByAggregateInput, {nullable:true})
    _min?: agent_records_by_dayMinOrderByAggregateInput;

    @Field(() => agent_records_by_daySumOrderByAggregateInput, {nullable:true})
    _sum?: agent_records_by_daySumOrderByAggregateInput;
}
