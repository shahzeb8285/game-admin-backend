import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class game_rebatesScalarWhereWithAggregatesInput {

    @Field(() => [game_rebatesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<game_rebatesScalarWhereWithAggregatesInput>;

    @Field(() => [game_rebatesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<game_rebatesScalarWhereWithAggregatesInput>;

    @Field(() => [game_rebatesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<game_rebatesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_rebates_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_history_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    merchant_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    effective_bet_amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rebate_amount?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;
}
