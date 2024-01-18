import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { game_historyCountOrderByAggregateInput } from './game-history-count-order-by-aggregate.input';
import { game_historyAvgOrderByAggregateInput } from './game-history-avg-order-by-aggregate.input';
import { game_historyMaxOrderByAggregateInput } from './game-history-max-order-by-aggregate.input';
import { game_historyMinOrderByAggregateInput } from './game-history-min-order-by-aggregate.input';
import { game_historySumOrderByAggregateInput } from './game-history-sum-order-by-aggregate.input';

@InputType()
export class game_historyOrderByWithAggregationInput {

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

    @Field(() => game_historyCountOrderByAggregateInput, {nullable:true})
    _count?: game_historyCountOrderByAggregateInput;

    @Field(() => game_historyAvgOrderByAggregateInput, {nullable:true})
    _avg?: game_historyAvgOrderByAggregateInput;

    @Field(() => game_historyMaxOrderByAggregateInput, {nullable:true})
    _max?: game_historyMaxOrderByAggregateInput;

    @Field(() => game_historyMinOrderByAggregateInput, {nullable:true})
    _min?: game_historyMinOrderByAggregateInput;

    @Field(() => game_historySumOrderByAggregateInput, {nullable:true})
    _sum?: game_historySumOrderByAggregateInput;
}
