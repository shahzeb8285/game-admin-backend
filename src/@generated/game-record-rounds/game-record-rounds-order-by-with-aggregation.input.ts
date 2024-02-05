import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { game_record_roundsCountOrderByAggregateInput } from './game-record-rounds-count-order-by-aggregate.input';
import { game_record_roundsAvgOrderByAggregateInput } from './game-record-rounds-avg-order-by-aggregate.input';
import { game_record_roundsMaxOrderByAggregateInput } from './game-record-rounds-max-order-by-aggregate.input';
import { game_record_roundsMinOrderByAggregateInput } from './game-record-rounds-min-order-by-aggregate.input';
import { game_record_roundsSumOrderByAggregateInput } from './game-record-rounds-sum-order-by-aggregate.input';

@InputType()
export class game_record_roundsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_round_info_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    bet_amount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    payout?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    effective_bet_amount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_processed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_records_by_period_id?: keyof typeof SortOrder;

    @Field(() => game_record_roundsCountOrderByAggregateInput, {nullable:true})
    _count?: game_record_roundsCountOrderByAggregateInput;

    @Field(() => game_record_roundsAvgOrderByAggregateInput, {nullable:true})
    _avg?: game_record_roundsAvgOrderByAggregateInput;

    @Field(() => game_record_roundsMaxOrderByAggregateInput, {nullable:true})
    _max?: game_record_roundsMaxOrderByAggregateInput;

    @Field(() => game_record_roundsMinOrderByAggregateInput, {nullable:true})
    _min?: game_record_roundsMinOrderByAggregateInput;

    @Field(() => game_record_roundsSumOrderByAggregateInput, {nullable:true})
    _sum?: game_record_roundsSumOrderByAggregateInput;
}
