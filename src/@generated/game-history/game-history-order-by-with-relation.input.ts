import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { playersOrderByWithRelationInput } from '../players/players-order-by-with-relation.input';
import { game_rebatesOrderByRelationAggregateInput } from '../game-rebates/game-rebates-order-by-relation-aggregate.input';

@InputType()
export class game_historyOrderByWithRelationInput {

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

    @Field(() => playersOrderByWithRelationInput, {nullable:true})
    players?: playersOrderByWithRelationInput;

    @Field(() => game_rebatesOrderByRelationAggregateInput, {nullable:true})
    game_rebates?: game_rebatesOrderByRelationAggregateInput;
}
