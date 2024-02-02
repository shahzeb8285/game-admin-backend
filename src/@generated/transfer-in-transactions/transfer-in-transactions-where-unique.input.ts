import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereInput } from './transfer-in-transactions-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumreal_currencyFilter } from '../prisma/enumreal-currency-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { Enumgame_currencyFilter } from '../prisma/enumgame-currency-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Enumwallet_transaction_statusFilter } from '../prisma/enumwallet-transaction-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';

@InputType()
export class transfer_in_transactionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    transfer_in_transaction_id?: string;

    @Field(() => [transfer_in_transactionsWhereInput], {nullable:true})
    AND?: Array<transfer_in_transactionsWhereInput>;

    @Field(() => [transfer_in_transactionsWhereInput], {nullable:true})
    OR?: Array<transfer_in_transactionsWhereInput>;

    @Field(() => [transfer_in_transactionsWhereInput], {nullable:true})
    NOT?: Array<transfer_in_transactionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => Enumreal_currencyFilter, {nullable:true})
    transaction_currency?: Enumreal_currencyFilter;

    @Field(() => FloatFilter, {nullable:true})
    transaction_amount?: FloatFilter;

    @Field(() => Enumgame_currencyFilter, {nullable:true})
    game_currency?: Enumgame_currencyFilter;

    @Field(() => FloatFilter, {nullable:true})
    game_amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    counterpart_platform?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    counterpart_username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_date?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_remarks?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comment?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    processed_by?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    process_time?: DateTimeNullableFilter;

    @Field(() => Enumwallet_transaction_statusFilter, {nullable:true})
    status?: Enumwallet_transaction_statusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => PlayersRelationFilter, {nullable:true})
    players?: PlayersRelationFilter;
}
