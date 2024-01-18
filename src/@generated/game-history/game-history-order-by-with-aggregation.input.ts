import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameHistoryCountOrderByAggregateInput } from './game-history-count-order-by-aggregate.input';
import { GameHistoryAvgOrderByAggregateInput } from './game-history-avg-order-by-aggregate.input';
import { GameHistoryMaxOrderByAggregateInput } from './game-history-max-order-by-aggregate.input';
import { GameHistoryMinOrderByAggregateInput } from './game-history-min-order-by-aggregate.input';
import { GameHistorySumOrderByAggregateInput } from './game-history-sum-order-by-aggregate.input';

@InputType()
export class GameHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_history_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_gamedesc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bet_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    win_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => GameHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: GameHistoryCountOrderByAggregateInput;

    @Field(() => GameHistoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: GameHistoryAvgOrderByAggregateInput;

    @Field(() => GameHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: GameHistoryMaxOrderByAggregateInput;

    @Field(() => GameHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: GameHistoryMinOrderByAggregateInput;

    @Field(() => GameHistorySumOrderByAggregateInput, {nullable:true})
    _sum?: GameHistorySumOrderByAggregateInput;
}
