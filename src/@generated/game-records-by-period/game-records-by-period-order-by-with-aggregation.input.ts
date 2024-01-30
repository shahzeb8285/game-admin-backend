import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { game_records_by_periodCountOrderByAggregateInput } from './game-records-by-period-count-order-by-aggregate.input';
import { game_records_by_periodAvgOrderByAggregateInput } from './game-records-by-period-avg-order-by-aggregate.input';
import { game_records_by_periodMaxOrderByAggregateInput } from './game-records-by-period-max-order-by-aggregate.input';
import { game_records_by_periodMinOrderByAggregateInput } from './game-records-by-period-min-order-by-aggregate.input';
import { game_records_by_periodSumOrderByAggregateInput } from './game-records-by-period-sum-order-by-aggregate.input';

@InputType()
export class game_records_by_periodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_records_by_period_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_url?: keyof typeof SortOrder;

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
    rebate_status?: keyof typeof SortOrder;

    @Field(() => game_records_by_periodCountOrderByAggregateInput, {nullable:true})
    _count?: game_records_by_periodCountOrderByAggregateInput;

    @Field(() => game_records_by_periodAvgOrderByAggregateInput, {nullable:true})
    _avg?: game_records_by_periodAvgOrderByAggregateInput;

    @Field(() => game_records_by_periodMaxOrderByAggregateInput, {nullable:true})
    _max?: game_records_by_periodMaxOrderByAggregateInput;

    @Field(() => game_records_by_periodMinOrderByAggregateInput, {nullable:true})
    _min?: game_records_by_periodMinOrderByAggregateInput;

    @Field(() => game_records_by_periodSumOrderByAggregateInput, {nullable:true})
    _sum?: game_records_by_periodSumOrderByAggregateInput;
}
