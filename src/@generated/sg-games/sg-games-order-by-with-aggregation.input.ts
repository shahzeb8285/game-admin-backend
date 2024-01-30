import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { sg_gamesCountOrderByAggregateInput } from './sg-games-count-order-by-aggregate.input';
import { sg_gamesAvgOrderByAggregateInput } from './sg-games-avg-order-by-aggregate.input';
import { sg_gamesMaxOrderByAggregateInput } from './sg-games-max-order-by-aggregate.input';
import { sg_gamesMinOrderByAggregateInput } from './sg-games-min-order-by-aggregate.input';
import { sg_gamesSumOrderByAggregateInput } from './sg-games-sum-order-by-aggregate.input';

@InputType()
export class sg_gamesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sg_game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    page_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile_page_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rtp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coun_rest_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile_external_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    table_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    has_demo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    freeround?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bonus_buy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    megaways?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    freespins?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_bet_default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_bet_default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_multiplier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => sg_gamesCountOrderByAggregateInput, {nullable:true})
    _count?: sg_gamesCountOrderByAggregateInput;

    @Field(() => sg_gamesAvgOrderByAggregateInput, {nullable:true})
    _avg?: sg_gamesAvgOrderByAggregateInput;

    @Field(() => sg_gamesMaxOrderByAggregateInput, {nullable:true})
    _max?: sg_gamesMaxOrderByAggregateInput;

    @Field(() => sg_gamesMinOrderByAggregateInput, {nullable:true})
    _min?: sg_gamesMinOrderByAggregateInput;

    @Field(() => sg_gamesSumOrderByAggregateInput, {nullable:true})
    _sum?: sg_gamesSumOrderByAggregateInput;
}
