import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class game_record_roundsScalarWhereInput {

    @Field(() => [game_record_roundsScalarWhereInput], {nullable:true})
    AND?: Array<game_record_roundsScalarWhereInput>;

    @Field(() => [game_record_roundsScalarWhereInput], {nullable:true})
    OR?: Array<game_record_roundsScalarWhereInput>;

    @Field(() => [game_record_roundsScalarWhereInput], {nullable:true})
    NOT?: Array<game_record_roundsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_round_info_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    game_date?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    game_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rebate_category_id?: IntFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    bet_amount?: FloatNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    payout?: FloatFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    effective_bet_amount?: FloatNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_processed?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    game_records_by_period_id?: StringFilter;
}
