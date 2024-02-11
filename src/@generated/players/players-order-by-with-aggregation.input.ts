import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { playersCountOrderByAggregateInput } from './players-count-order-by-aggregate.input';
import { playersMaxOrderByAggregateInput } from './players-max-order-by-aggregate.input';
import { playersMinOrderByAggregateInput } from './players-min-order-by-aggregate.input';

@InputType()
export class playersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tg_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_last_name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    tg_username?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tg_photo_url?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    user_language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundist_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => playersCountOrderByAggregateInput, {nullable:true})
    _count?: playersCountOrderByAggregateInput;

    @Field(() => playersMaxOrderByAggregateInput, {nullable:true})
    _max?: playersMaxOrderByAggregateInput;

    @Field(() => playersMinOrderByAggregateInput, {nullable:true})
    _min?: playersMinOrderByAggregateInput;
}
