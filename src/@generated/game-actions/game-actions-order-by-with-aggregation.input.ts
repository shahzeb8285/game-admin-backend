import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { game_actionsCountOrderByAggregateInput } from './game-actions-count-order-by-aggregate.input';
import { game_actionsMaxOrderByAggregateInput } from './game-actions-max-order-by-aggregate.input';
import { game_actionsMinOrderByAggregateInput } from './game-actions-min-order-by-aggregate.input';

@InputType()
export class game_actionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_action_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_round_info_id?: keyof typeof SortOrder;

    @Field(() => game_actionsCountOrderByAggregateInput, {nullable:true})
    _count?: game_actionsCountOrderByAggregateInput;

    @Field(() => game_actionsMaxOrderByAggregateInput, {nullable:true})
    _max?: game_actionsMaxOrderByAggregateInput;

    @Field(() => game_actionsMinOrderByAggregateInput, {nullable:true})
    _min?: game_actionsMinOrderByAggregateInput;
}
