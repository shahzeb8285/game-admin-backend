import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { game_round_infosOrderByWithRelationInput } from '../game-round-infos/game-round-infos-order-by-with-relation.input';
import { fl_categoriesOrderByWithRelationInput } from '../fl-categories/fl-categories-order-by-with-relation.input';
import { playersOrderByWithRelationInput } from '../players/players-order-by-with-relation.input';

@InputType()
export class game_record_roundsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    game_round_info_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    bet_amount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    payout?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    effective_bet_amount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_processed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_records_by_period_id?: keyof typeof SortOrder;

    @Field(() => game_round_infosOrderByWithRelationInput, {nullable:true})
    game_round?: game_round_infosOrderByWithRelationInput;

    @Field(() => fl_categoriesOrderByWithRelationInput, {nullable:true})
    category?: fl_categoriesOrderByWithRelationInput;

    @Field(() => playersOrderByWithRelationInput, {nullable:true})
    player?: playersOrderByWithRelationInput;
}
