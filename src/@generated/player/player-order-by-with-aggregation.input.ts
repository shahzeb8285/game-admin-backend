import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlayerCountOrderByAggregateInput } from './player-count-order-by-aggregate.input';
import { PlayerMaxOrderByAggregateInput } from './player-max-order-by-aggregate.input';
import { PlayerMinOrderByAggregateInput } from './player-min-order-by-aggregate.input';

@InputType()
export class PlayerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_last_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_user_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_photo_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_date?: keyof typeof SortOrder;

    @Field(() => PlayerCountOrderByAggregateInput, {nullable:true})
    _count?: PlayerCountOrderByAggregateInput;

    @Field(() => PlayerMaxOrderByAggregateInput, {nullable:true})
    _max?: PlayerMaxOrderByAggregateInput;

    @Field(() => PlayerMinOrderByAggregateInput, {nullable:true})
    _min?: PlayerMinOrderByAggregateInput;
}
