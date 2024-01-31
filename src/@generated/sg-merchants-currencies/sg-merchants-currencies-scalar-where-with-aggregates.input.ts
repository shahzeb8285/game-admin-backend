import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class sg_merchants_currenciesScalarWhereWithAggregatesInput {

    @Field(() => [sg_merchants_currenciesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<sg_merchants_currenciesScalarWhereWithAggregatesInput>;

    @Field(() => [sg_merchants_currenciesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<sg_merchants_currenciesScalarWhereWithAggregatesInput>;

    @Field(() => [sg_merchants_currenciesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<sg_merchants_currenciesScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    sg_merchants_currency_id?: UuidWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    merchants_currency_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    merchant_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currencies?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
