import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumreal_currencyFilter } from '../prisma/enumreal-currency-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { Enumgame_currencyFilter } from '../prisma/enumgame-currency-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Enumwallet_transaction_statusFilter } from '../prisma/enumwallet-transaction-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class withdrawal_transactionsScalarWhereInput {

    @Field(() => [withdrawal_transactionsScalarWhereInput], {nullable:true})
    AND?: Array<withdrawal_transactionsScalarWhereInput>;

    @Field(() => [withdrawal_transactionsScalarWhereInput], {nullable:true})
    OR?: Array<withdrawal_transactionsScalarWhereInput>;

    @Field(() => [withdrawal_transactionsScalarWhereInput], {nullable:true})
    NOT?: Array<withdrawal_transactionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    withdrawal_transaction_id?: StringFilter;

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
    player_bank_account_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_date?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_remarks?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    processed_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    process_time?: DateTimeFilter;

    @Field(() => Enumwallet_transaction_statusFilter, {nullable:true})
    status?: Enumwallet_transaction_statusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    admin_bank_accountsAdmin_bank_account_id?: StringNullableFilter;
}
