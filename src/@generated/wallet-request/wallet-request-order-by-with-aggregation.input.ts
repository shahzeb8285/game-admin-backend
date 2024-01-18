import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WalletRequestCountOrderByAggregateInput } from './wallet-request-count-order-by-aggregate.input';
import { WalletRequestAvgOrderByAggregateInput } from './wallet-request-avg-order-by-aggregate.input';
import { WalletRequestMaxOrderByAggregateInput } from './wallet-request-max-order-by-aggregate.input';
import { WalletRequestMinOrderByAggregateInput } from './wallet-request-min-order-by-aggregate.input';
import { WalletRequestSumOrderByAggregateInput } from './wallet-request-sum-order-by-aggregate.input';

@InputType()
export class WalletRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    wallet_request_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    t_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

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

    @Field(() => WalletRequestCountOrderByAggregateInput, {nullable:true})
    _count?: WalletRequestCountOrderByAggregateInput;

    @Field(() => WalletRequestAvgOrderByAggregateInput, {nullable:true})
    _avg?: WalletRequestAvgOrderByAggregateInput;

    @Field(() => WalletRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: WalletRequestMaxOrderByAggregateInput;

    @Field(() => WalletRequestMinOrderByAggregateInput, {nullable:true})
    _min?: WalletRequestMinOrderByAggregateInput;

    @Field(() => WalletRequestSumOrderByAggregateInput, {nullable:true})
    _sum?: WalletRequestSumOrderByAggregateInput;
}
