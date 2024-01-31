import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Enumreal_currencyWithAggregatesFilter } from '../prisma/enumreal-currency-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { Enumgame_currencyWithAggregatesFilter } from '../prisma/enumgame-currency-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { Enumwallet_transaction_statusWithAggregatesFilter } from '../prisma/enumwallet-transaction-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class withdrawal_transactionsScalarWhereWithAggregatesInput {

    @Field(() => [withdrawal_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<withdrawal_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [withdrawal_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<withdrawal_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [withdrawal_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<withdrawal_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    withdrawal_transaction_id?: UuidWithAggregatesFilter;

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
    player_bank_account_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transaction_date?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_remarks?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    comment?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    processed_by?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    process_time?: DateTimeNullableWithAggregatesFilter;

    @Field(() => Enumwallet_transaction_statusWithAggregatesFilter, {nullable:true})
    status?: Enumwallet_transaction_statusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;
}
