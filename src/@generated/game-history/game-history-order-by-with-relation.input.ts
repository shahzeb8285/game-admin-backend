import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlayerOrderByWithRelationInput } from '../player/player-order-by-with-relation.input';
import { GameRebateOrderByRelationAggregateInput } from '../game-rebate/game-rebate-order-by-relation-aggregate.input';

@InputType()
export class GameHistoryOrderByWithRelationInput {

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

    @Field(() => PlayerOrderByWithRelationInput, {nullable:true})
    players?: PlayerOrderByWithRelationInput;

    @Field(() => GameRebateOrderByRelationAggregateInput, {nullable:true})
    game_rebates?: GameRebateOrderByRelationAggregateInput;
}
