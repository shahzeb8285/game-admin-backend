import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { unprocessed_game_round_infosCountOrderByAggregateInput } from './unprocessed-game-round-infos-count-order-by-aggregate.input';
import { unprocessed_game_round_infosMaxOrderByAggregateInput } from './unprocessed-game-round-infos-max-order-by-aggregate.input';
import { unprocessed_game_round_infosMinOrderByAggregateInput } from './unprocessed-game-round-infos-min-order-by-aggregate.input';

@InputType()
export class unprocessed_game_round_infosOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_round_info_id?: keyof typeof SortOrder;

    @Field(() => unprocessed_game_round_infosCountOrderByAggregateInput, {nullable:true})
    _count?: unprocessed_game_round_infosCountOrderByAggregateInput;

    @Field(() => unprocessed_game_round_infosMaxOrderByAggregateInput, {nullable:true})
    _max?: unprocessed_game_round_infosMaxOrderByAggregateInput;

    @Field(() => unprocessed_game_round_infosMinOrderByAggregateInput, {nullable:true})
    _min?: unprocessed_game_round_infosMinOrderByAggregateInput;
}
