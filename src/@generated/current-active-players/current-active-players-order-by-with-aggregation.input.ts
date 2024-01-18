import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { current_active_playersCountOrderByAggregateInput } from './current-active-players-count-order-by-aggregate.input';
import { current_active_playersMaxOrderByAggregateInput } from './current-active-players-max-order-by-aggregate.input';
import { current_active_playersMinOrderByAggregateInput } from './current-active-players-min-order-by-aggregate.input';

@InputType()
export class current_active_playersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_active_time?: keyof typeof SortOrder;

    @Field(() => current_active_playersCountOrderByAggregateInput, {nullable:true})
    _count?: current_active_playersCountOrderByAggregateInput;

    @Field(() => current_active_playersMaxOrderByAggregateInput, {nullable:true})
    _max?: current_active_playersMaxOrderByAggregateInput;

    @Field(() => current_active_playersMinOrderByAggregateInput, {nullable:true})
    _min?: current_active_playersMinOrderByAggregateInput;
}
