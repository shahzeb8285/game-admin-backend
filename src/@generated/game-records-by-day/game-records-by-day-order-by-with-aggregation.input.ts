import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { game_records_by_dayCountOrderByAggregateInput } from './game-records-by-day-count-order-by-aggregate.input';
import { game_records_by_dayAvgOrderByAggregateInput } from './game-records-by-day-avg-order-by-aggregate.input';
import { game_records_by_dayMaxOrderByAggregateInput } from './game-records-by-day-max-order-by-aggregate.input';
import { game_records_by_dayMinOrderByAggregateInput } from './game-records-by-day-min-order-by-aggregate.input';
import { game_records_by_daySumOrderByAggregateInput } from './game-records-by-day-sum-order-by-aggregate.input';

@InputType()
export class game_records_by_dayOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_records_by_day_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effective_bet_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pnl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_active?: keyof typeof SortOrder;

    @Field(() => game_records_by_dayCountOrderByAggregateInput, {nullable:true})
    _count?: game_records_by_dayCountOrderByAggregateInput;

    @Field(() => game_records_by_dayAvgOrderByAggregateInput, {nullable:true})
    _avg?: game_records_by_dayAvgOrderByAggregateInput;

    @Field(() => game_records_by_dayMaxOrderByAggregateInput, {nullable:true})
    _max?: game_records_by_dayMaxOrderByAggregateInput;

    @Field(() => game_records_by_dayMinOrderByAggregateInput, {nullable:true})
    _min?: game_records_by_dayMinOrderByAggregateInput;

    @Field(() => game_records_by_daySumOrderByAggregateInput, {nullable:true})
    _sum?: game_records_by_daySumOrderByAggregateInput;
}
