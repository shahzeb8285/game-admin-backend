import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Enumreal_currencyWithAggregatesFilter } from '../prisma/enumreal-currency-with-aggregates-filter.input';
import { Enumgame_currencyWithAggregatesFilter } from '../prisma/enumgame-currency-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class exchange_ratesScalarWhereWithAggregatesInput {

    @Field(() => [exchange_ratesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<exchange_ratesScalarWhereWithAggregatesInput>;

    @Field(() => [exchange_ratesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<exchange_ratesScalarWhereWithAggregatesInput>;

    @Field(() => [exchange_ratesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<exchange_ratesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    exchange_rate_id?: StringWithAggregatesFilter;

    @Field(() => Enumreal_currencyWithAggregatesFilter, {nullable:true})
    real_currency?: Enumreal_currencyWithAggregatesFilter;

    @Field(() => Enumgame_currencyWithAggregatesFilter, {nullable:true})
    game_currency?: Enumgame_currencyWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    game_per_real?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
