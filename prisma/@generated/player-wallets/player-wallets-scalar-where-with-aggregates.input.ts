import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class player_walletsScalarWhereWithAggregatesInput {

    @Field(() => [player_walletsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<player_walletsScalarWhereWithAggregatesInput>;

    @Field(() => [player_walletsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<player_walletsScalarWhereWithAggregatesInput>;

    @Field(() => [player_walletsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<player_walletsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_wallet_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currency?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    frozen_amount?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;
}
