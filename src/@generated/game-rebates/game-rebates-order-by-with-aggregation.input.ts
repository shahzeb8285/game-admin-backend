import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { game_rebatesCountOrderByAggregateInput } from './game-rebates-count-order-by-aggregate.input';
import { game_rebatesAvgOrderByAggregateInput } from './game-rebates-avg-order-by-aggregate.input';
import { game_rebatesMaxOrderByAggregateInput } from './game-rebates-max-order-by-aggregate.input';
import { game_rebatesMinOrderByAggregateInput } from './game-rebates-min-order-by-aggregate.input';
import { game_rebatesSumOrderByAggregateInput } from './game-rebates-sum-order-by-aggregate.input';

@InputType()
export class game_rebatesOrderByWithAggregationInput {

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

    @Field(() => game_rebatesCountOrderByAggregateInput, {nullable:true})
    _count?: game_rebatesCountOrderByAggregateInput;

    @Field(() => game_rebatesAvgOrderByAggregateInput, {nullable:true})
    _avg?: game_rebatesAvgOrderByAggregateInput;

    @Field(() => game_rebatesMaxOrderByAggregateInput, {nullable:true})
    _max?: game_rebatesMaxOrderByAggregateInput;

    @Field(() => game_rebatesMinOrderByAggregateInput, {nullable:true})
    _min?: game_rebatesMinOrderByAggregateInput;

    @Field(() => game_rebatesSumOrderByAggregateInput, {nullable:true})
    _sum?: game_rebatesSumOrderByAggregateInput;
}
