import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Enumgame_currencyWithAggregatesFilter } from '../prisma/enumgame-currency-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class player_walletsScalarWhereWithAggregatesInput {

    @Field(() => [player_walletsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<player_walletsScalarWhereWithAggregatesInput>;

    @Field(() => [player_walletsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<player_walletsScalarWhereWithAggregatesInput>;

    @Field(() => [player_walletsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<player_walletsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    player_wallet_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id?: StringWithAggregatesFilter;

    @Field(() => Enumgame_currencyWithAggregatesFilter, {nullable:true})
    currency?: Enumgame_currencyWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    frozen_amount?: FloatWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    udate?: DateTimeNullableWithAggregatesFilter;
}
