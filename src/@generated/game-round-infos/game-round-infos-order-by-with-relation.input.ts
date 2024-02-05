import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { game_record_roundsOrderByRelationAggregateInput } from '../game-record-rounds/game-record-rounds-order-by-relation-aggregate.input';

@InputType()
export class game_round_infosOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    game_round_info_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    i_gamedesc?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    i_extparam?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    game_extra?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => game_record_roundsOrderByRelationAggregateInput, {nullable:true})
    game_record_rounds?: game_record_roundsOrderByRelationAggregateInput;
}
