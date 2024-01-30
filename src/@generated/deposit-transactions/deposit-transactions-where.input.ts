import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumreal_currencyFilter } from '../prisma/enumreal-currency-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { Enumgame_currencyFilter } from '../prisma/enumgame-currency-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Enumwallet_transaction_statusFilter } from '../prisma/enumwallet-transaction-status-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';
import { Admin_bank_accountsRelationFilter } from '../prisma/admin-bank-accounts-relation-filter.input';

@InputType()
export class deposit_transactionsWhereInput {

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    AND?: Array<deposit_transactionsWhereInput>;

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    OR?: Array<deposit_transactionsWhereInput>;

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    NOT?: Array<deposit_transactionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    deposit_transaction_id?: StringFilter;

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

    @Field(() => PlayersRelationFilter, {nullable:true})
    players?: PlayersRelationFilter;

    @Field(() => Admin_bank_accountsRelationFilter, {nullable:true})
    admin_bank_account?: Admin_bank_accountsRelationFilter;
}
