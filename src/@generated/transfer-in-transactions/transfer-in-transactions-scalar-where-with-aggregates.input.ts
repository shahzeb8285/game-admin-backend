import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Enumreal_currencyWithAggregatesFilter } from '../prisma/enumreal-currency-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { Enumgame_currencyWithAggregatesFilter } from '../prisma/enumgame-currency-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { Enumwallet_transaction_statusWithAggregatesFilter } from '../prisma/enumwallet-transaction-status-with-aggregates-filter.input';

@InputType()
export class transfer_in_transactionsScalarWhereWithAggregatesInput {

    @Field(() => [transfer_in_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<transfer_in_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [transfer_in_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<transfer_in_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [transfer_in_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<transfer_in_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transfer_in_transaction_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id?: StringWithAggregatesFilter;

    @Field(() => Enumreal_currencyWithAggregatesFilter, {nullable:true})
    transaction_currency?: Enumreal_currencyWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    transaction_amount?: FloatWithAggregatesFilter;

    @Field(() => Enumgame_currencyWithAggregatesFilter, {nullable:true})
    game_currency?: Enumgame_currencyWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    game_amount?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    counterpart_platform?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    counterpart_username?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transaction_date?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_remarks?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    comment?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    processed_by?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    process_time?: DateTimeWithAggregatesFilter;

    @Field(() => Enumwallet_transaction_statusWithAggregatesFilter, {nullable:true})
    status?: Enumwallet_transaction_statusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;
}
