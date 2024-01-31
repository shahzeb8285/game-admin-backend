import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { Enumrebate_statusWithAggregatesFilter } from '../prisma/enumrebate-status-with-aggregates-filter.input';

@InputType()
export class game_records_by_periodScalarWhereWithAggregatesInput {

    @Field(() => [game_records_by_periodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<game_records_by_periodScalarWhereWithAggregatesInput>;

    @Field(() => [game_records_by_periodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<game_records_by_periodScalarWhereWithAggregatesInput>;

    @Field(() => [game_records_by_periodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<game_records_by_periodScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    game_records_by_period_id?: UuidWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    game_date?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rebate_category_id?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    effective_bet_amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    pnl?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rebate_amount?: FloatWithAggregatesFilter;

    @Field(() => Enumrebate_statusWithAggregatesFilter, {nullable:true})
    rebate_status?: Enumrebate_statusWithAggregatesFilter;
}
