import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereInput } from './deposit-transactions-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumreal_currencyFilter } from '../prisma/enumreal-currency-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { Enumgame_currencyFilter } from '../prisma/enumgame-currency-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Enumwallet_transaction_statusFilter } from '../prisma/enumwallet-transaction-status-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';
import { Admin_bank_accountsRelationFilter } from '../prisma/admin-bank-accounts-relation-filter.input';
import { AdminsNullableRelationFilter } from '../prisma/admins-nullable-relation-filter.input';

@InputType()
export class deposit_transactionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    deposit_transaction_id?: string;

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    AND?: Array<deposit_transactionsWhereInput>;

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    OR?: Array<deposit_transactionsWhereInput>;

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    NOT?: Array<deposit_transactionsWhereInput>;

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
    admin_bank_account_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    trans_date?: DateTimeFilter;

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

    @Field(() => Admin_bank_accountsRelationFilter, {nullable:true})
    admin_bank_account?: Admin_bank_accountsRelationFilter;

    @Field(() => AdminsNullableRelationFilter, {nullable:true})
    processed_by_admin?: AdminsNullableRelationFilter;
}
