import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlayerLoginLogCountOrderByAggregateInput } from './player-login-log-count-order-by-aggregate.input';
import { PlayerLoginLogMaxOrderByAggregateInput } from './player-login-log-max-order-by-aggregate.input';
import { PlayerLoginLogMinOrderByAggregateInput } from './player-login-log-min-order-by-aggregate.input';

@InputType()
export class PlayerLoginLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login_time?: keyof typeof SortOrder;

    @Field(() => PlayerLoginLogCountOrderByAggregateInput, {nullable:true})
    _count?: PlayerLoginLogCountOrderByAggregateInput;

    @Field(() => PlayerLoginLogMaxOrderByAggregateInput, {nullable:true})
    _max?: PlayerLoginLogMaxOrderByAggregateInput;

    @Field(() => PlayerLoginLogMinOrderByAggregateInput, {nullable:true})
    _min?: PlayerLoginLogMinOrderByAggregateInput;
}
