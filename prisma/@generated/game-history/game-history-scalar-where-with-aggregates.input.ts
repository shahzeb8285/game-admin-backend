import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class game_historyScalarWhereWithAggregatesInput {

    @Field(() => [game_historyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<game_historyScalarWhereWithAggregatesInput>;

    @Field(() => [game_historyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<game_historyScalarWhereWithAggregatesInput>;

    @Field(() => [game_historyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<game_historyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_history_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    i_gamedesc?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    bet_amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    win_amount?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transaction_date?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;
}
