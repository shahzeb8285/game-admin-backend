import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class sg_gamesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rtp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coun_rest_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_bet_default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_bet_default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_multiplier?: keyof typeof SortOrder;
}
