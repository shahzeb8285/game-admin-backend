import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesWhereInput } from './sg-games-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class sg_gamesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    sg_game_id?: string;

    @Field(() => [sg_gamesWhereInput], {nullable:true})
    AND?: Array<sg_gamesWhereInput>;

    @Field(() => [sg_gamesWhereInput], {nullable:true})
    OR?: Array<sg_gamesWhereInput>;

    @Field(() => [sg_gamesWhereInput], {nullable:true})
    NOT?: Array<sg_gamesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    game_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    merchant_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sort?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    page_code?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile_page_code?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    rtp?: FloatNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    coun_rest_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    external_code?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile_external_code?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    table_id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    has_demo?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    freeround?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    bonus_buy?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    megaways?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    freespins?: BoolFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    min_bet_default?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    max_bet_default?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    max_multiplier?: FloatNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
