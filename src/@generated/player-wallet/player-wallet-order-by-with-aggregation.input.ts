import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlayerWalletCountOrderByAggregateInput } from './player-wallet-count-order-by-aggregate.input';
import { PlayerWalletAvgOrderByAggregateInput } from './player-wallet-avg-order-by-aggregate.input';
import { PlayerWalletMaxOrderByAggregateInput } from './player-wallet-max-order-by-aggregate.input';
import { PlayerWalletMinOrderByAggregateInput } from './player-wallet-min-order-by-aggregate.input';
import { PlayerWalletSumOrderByAggregateInput } from './player-wallet-sum-order-by-aggregate.input';

@InputType()
export class PlayerWalletOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_wallet_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    frozen_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => PlayerWalletCountOrderByAggregateInput, {nullable:true})
    _count?: PlayerWalletCountOrderByAggregateInput;

    @Field(() => PlayerWalletAvgOrderByAggregateInput, {nullable:true})
    _avg?: PlayerWalletAvgOrderByAggregateInput;

    @Field(() => PlayerWalletMaxOrderByAggregateInput, {nullable:true})
    _max?: PlayerWalletMaxOrderByAggregateInput;

    @Field(() => PlayerWalletMinOrderByAggregateInput, {nullable:true})
    _min?: PlayerWalletMinOrderByAggregateInput;

    @Field(() => PlayerWalletSumOrderByAggregateInput, {nullable:true})
    _sum?: PlayerWalletSumOrderByAggregateInput;
}
