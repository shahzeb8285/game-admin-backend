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

    @Field(() => SortOrderInput, {nullable:true})
    sort?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    page_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mobile_page_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    rtp?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    coun_rest_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    external_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mobile_external_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    table_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    has_demo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    freeround?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bonus_buy?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    megaways?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    freespins?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    min_bet_default?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max_bet_default?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max_multiplier?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    cdate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    udate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    enabled?: SortOrderInput;
}
