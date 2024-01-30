import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { wallet_requestsCountOrderByAggregateInput } from './wallet-requests-count-order-by-aggregate.input';
import { wallet_requestsAvgOrderByAggregateInput } from './wallet-requests-avg-order-by-aggregate.input';
import { wallet_requestsMaxOrderByAggregateInput } from './wallet-requests-max-order-by-aggregate.input';
import { wallet_requestsMinOrderByAggregateInput } from './wallet-requests-min-order-by-aggregate.input';
import { wallet_requestsSumOrderByAggregateInput } from './wallet-requests-sum-order-by-aggregate.input';

@InputType()
export class wallet_requestsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    wallet_request_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_extparam?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_rollback?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_gamedesc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_action_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_reference_action_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    round_start?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    round_ended?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_extra?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subtype?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jackpot_win?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hmac?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    response?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => wallet_requestsCountOrderByAggregateInput, {nullable:true})
    _count?: wallet_requestsCountOrderByAggregateInput;

    @Field(() => wallet_requestsAvgOrderByAggregateInput, {nullable:true})
    _avg?: wallet_requestsAvgOrderByAggregateInput;

    @Field(() => wallet_requestsMaxOrderByAggregateInput, {nullable:true})
    _max?: wallet_requestsMaxOrderByAggregateInput;

    @Field(() => wallet_requestsMinOrderByAggregateInput, {nullable:true})
    _min?: wallet_requestsMinOrderByAggregateInput;

    @Field(() => wallet_requestsSumOrderByAggregateInput, {nullable:true})
    _sum?: wallet_requestsSumOrderByAggregateInput;
}
