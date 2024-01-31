import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class sg_gamesOrderByWithRelationInput {

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

    @Field(() => SortOrderInput, {nullable:true})
    mobile_page_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    rtp?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    coun_rest_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    external_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mobile_external_code?: SortOrderInput;

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

    @Field(() => SortOrderInput, {nullable:true})
    min_bet_default?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max_bet_default?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max_multiplier?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;
}
