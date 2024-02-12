import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class sg_gamesScalarWhereInput {

    @Field(() => [sg_gamesScalarWhereInput], {nullable:true})
    AND?: Array<sg_gamesScalarWhereInput>;

    @Field(() => [sg_gamesScalarWhereInput], {nullable:true})
    OR?: Array<sg_gamesScalarWhereInput>;

    @Field(() => [sg_gamesScalarWhereInput], {nullable:true})
    NOT?: Array<sg_gamesScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    sg_game_id?: UuidFilter;

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

    @Field(() => IntNullableFilter, {nullable:true})
    sort?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    page_code?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile_page_code?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    rtp?: FloatNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    coun_rest_id?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    external_code?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile_external_code?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    table_id?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    has_demo?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    freeround?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    bonus_buy?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    megaways?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    freespins?: BoolNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    min_bet_default?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    max_bet_default?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    max_multiplier?: FloatNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    cdate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    udate?: DateTimeNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    enabled?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    game_record_roundsGame_round_info_id?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    game_record_roundsGame_date?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    game_record_roundsGame_url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    game_record_roundsPlayer_id?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    game_record_roundsRebate_category_id?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    game_record_roundsGame_records_by_period_id?: StringNullableFilter;
}
