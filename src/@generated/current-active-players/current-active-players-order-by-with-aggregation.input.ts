import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CurrentActivePlayersCountOrderByAggregateInput } from './current-active-players-count-order-by-aggregate.input';
import { CurrentActivePlayersMaxOrderByAggregateInput } from './current-active-players-max-order-by-aggregate.input';
import { CurrentActivePlayersMinOrderByAggregateInput } from './current-active-players-min-order-by-aggregate.input';

@InputType()
export class CurrentActivePlayersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_active_time?: keyof typeof SortOrder;

    @Field(() => CurrentActivePlayersCountOrderByAggregateInput, {nullable:true})
    _count?: CurrentActivePlayersCountOrderByAggregateInput;

    @Field(() => CurrentActivePlayersMaxOrderByAggregateInput, {nullable:true})
    _max?: CurrentActivePlayersMaxOrderByAggregateInput;

    @Field(() => CurrentActivePlayersMinOrderByAggregateInput, {nullable:true})
    _min?: CurrentActivePlayersMinOrderByAggregateInput;
}
