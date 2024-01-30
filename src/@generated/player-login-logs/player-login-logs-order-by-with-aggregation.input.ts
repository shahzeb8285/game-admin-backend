import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { player_login_logsCountOrderByAggregateInput } from './player-login-logs-count-order-by-aggregate.input';
import { player_login_logsMaxOrderByAggregateInput } from './player-login-logs-max-order-by-aggregate.input';
import { player_login_logsMinOrderByAggregateInput } from './player-login-logs-min-order-by-aggregate.input';

@InputType()
export class player_login_logsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_login_log_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login_time?: keyof typeof SortOrder;

    @Field(() => player_login_logsCountOrderByAggregateInput, {nullable:true})
    _count?: player_login_logsCountOrderByAggregateInput;

    @Field(() => player_login_logsMaxOrderByAggregateInput, {nullable:true})
    _max?: player_login_logsMaxOrderByAggregateInput;

    @Field(() => player_login_logsMinOrderByAggregateInput, {nullable:true})
    _min?: player_login_logsMinOrderByAggregateInput;
}
