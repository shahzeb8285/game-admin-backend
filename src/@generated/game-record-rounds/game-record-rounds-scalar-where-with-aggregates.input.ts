import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class game_record_roundsScalarWhereWithAggregatesInput {

    @Field(() => [game_record_roundsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<game_record_roundsScalarWhereWithAggregatesInput>;

    @Field(() => [game_record_roundsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<game_record_roundsScalarWhereWithAggregatesInput>;

    @Field(() => [game_record_roundsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<game_record_roundsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_round_info_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    game_date?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rebate_category_id?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    bet_amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    payout?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    effective_bet_amount?: FloatWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_processed?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_records_by_period_id?: StringWithAggregatesFilter;
}
