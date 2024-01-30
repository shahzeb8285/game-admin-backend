import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { player_walletsCountOrderByAggregateInput } from './player-wallets-count-order-by-aggregate.input';
import { player_walletsAvgOrderByAggregateInput } from './player-wallets-avg-order-by-aggregate.input';
import { player_walletsMaxOrderByAggregateInput } from './player-wallets-max-order-by-aggregate.input';
import { player_walletsMinOrderByAggregateInput } from './player-wallets-min-order-by-aggregate.input';
import { player_walletsSumOrderByAggregateInput } from './player-wallets-sum-order-by-aggregate.input';

@InputType()
export class player_walletsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_wallet_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

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

    @Field(() => player_walletsCountOrderByAggregateInput, {nullable:true})
    _count?: player_walletsCountOrderByAggregateInput;

    @Field(() => player_walletsAvgOrderByAggregateInput, {nullable:true})
    _avg?: player_walletsAvgOrderByAggregateInput;

    @Field(() => player_walletsMaxOrderByAggregateInput, {nullable:true})
    _max?: player_walletsMaxOrderByAggregateInput;

    @Field(() => player_walletsMinOrderByAggregateInput, {nullable:true})
    _min?: player_walletsMinOrderByAggregateInput;

    @Field(() => player_walletsSumOrderByAggregateInput, {nullable:true})
    _sum?: player_walletsSumOrderByAggregateInput;
}
