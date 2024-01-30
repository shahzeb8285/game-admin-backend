import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { game_round_infosCountOrderByAggregateInput } from './game-round-infos-count-order-by-aggregate.input';
import { game_round_infosMaxOrderByAggregateInput } from './game-round-infos-max-order-by-aggregate.input';
import { game_round_infosMinOrderByAggregateInput } from './game-round-infos-min-order-by-aggregate.input';

@InputType()
export class game_round_infosOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_round_info_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_gamedesc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_extparam?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_extra?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => game_round_infosCountOrderByAggregateInput, {nullable:true})
    _count?: game_round_infosCountOrderByAggregateInput;

    @Field(() => game_round_infosMaxOrderByAggregateInput, {nullable:true})
    _max?: game_round_infosMaxOrderByAggregateInput;

    @Field(() => game_round_infosMinOrderByAggregateInput, {nullable:true})
    _min?: game_round_infosMinOrderByAggregateInput;
}
