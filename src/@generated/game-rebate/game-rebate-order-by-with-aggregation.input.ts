import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameRebateCountOrderByAggregateInput } from './game-rebate-count-order-by-aggregate.input';
import { GameRebateAvgOrderByAggregateInput } from './game-rebate-avg-order-by-aggregate.input';
import { GameRebateMaxOrderByAggregateInput } from './game-rebate-max-order-by-aggregate.input';
import { GameRebateMinOrderByAggregateInput } from './game-rebate-min-order-by-aggregate.input';
import { GameRebateSumOrderByAggregateInput } from './game-rebate-sum-order-by-aggregate.input';

@InputType()
export class GameRebateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_rebates_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_history_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effective_bet_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => GameRebateCountOrderByAggregateInput, {nullable:true})
    _count?: GameRebateCountOrderByAggregateInput;

    @Field(() => GameRebateAvgOrderByAggregateInput, {nullable:true})
    _avg?: GameRebateAvgOrderByAggregateInput;

    @Field(() => GameRebateMaxOrderByAggregateInput, {nullable:true})
    _max?: GameRebateMaxOrderByAggregateInput;

    @Field(() => GameRebateMinOrderByAggregateInput, {nullable:true})
    _min?: GameRebateMinOrderByAggregateInput;

    @Field(() => GameRebateSumOrderByAggregateInput, {nullable:true})
    _sum?: GameRebateSumOrderByAggregateInput;
}
