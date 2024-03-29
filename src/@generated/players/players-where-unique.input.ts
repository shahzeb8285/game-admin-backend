import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsRelationFilter } from '../prisma/agents-relation-filter.input';
import { Deposit_transactionsListRelationFilter } from '../prisma/deposit-transactions-list-relation-filter.input';
import { Withdrawal_transactionsListRelationFilter } from '../prisma/withdrawal-transactions-list-relation-filter.input';
import { Player_login_logsListRelationFilter } from '../prisma/player-login-logs-list-relation-filter.input';
import { Manual_adjustmentsListRelationFilter } from '../prisma/manual-adjustments-list-relation-filter.input';
import { Rebate_transactionsListRelationFilter } from '../prisma/rebate-transactions-list-relation-filter.input';
import { Game_record_roundsListRelationFilter } from '../prisma/game-record-rounds-list-relation-filter.input';
import { Player_walletsNullableRelationFilter } from '../prisma/player-wallets-nullable-relation-filter.input';
import { Transfer_in_transactionsListRelationFilter } from '../prisma/transfer-in-transactions-list-relation-filter.input';
import { Transfer_out_transactionsListRelationFilter } from '../prisma/transfer-out-transactions-list-relation-filter.input';

@InputType()
export class playersWhereUniqueInput {

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:true})
    tg_id?: string;

    @Field(() => String, {nullable:true})
    tg_username?: string;

    @Field(() => [playersWhereInput], {nullable:true})
    AND?: Array<playersWhereInput>;

    @Field(() => [playersWhereInput], {nullable:true})
    OR?: Array<playersWhereInput>;

    @Field(() => [playersWhereInput], {nullable:true})
    NOT?: Array<playersWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_last_name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tg_photo_url?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    user_language?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_ip?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    reg_date?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fundist_password?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => AgentsRelationFilter, {nullable:true})
    agent?: AgentsRelationFilter;

    @Field(() => Deposit_transactionsListRelationFilter, {nullable:true})
    deposit_transactions?: Deposit_transactionsListRelationFilter;

    @Field(() => Withdrawal_transactionsListRelationFilter, {nullable:true})
    withdrawal_transactions?: Withdrawal_transactionsListRelationFilter;

    @Field(() => Player_login_logsListRelationFilter, {nullable:true})
    player_login_logs?: Player_login_logsListRelationFilter;

    @Field(() => Manual_adjustmentsListRelationFilter, {nullable:true})
    manual_adjustments?: Manual_adjustmentsListRelationFilter;

    @Field(() => Rebate_transactionsListRelationFilter, {nullable:true})
    rebate_transactions?: Rebate_transactionsListRelationFilter;

    @Field(() => Game_record_roundsListRelationFilter, {nullable:true})
    game_record_rounds?: Game_record_roundsListRelationFilter;

    @Field(() => Player_walletsNullableRelationFilter, {nullable:true})
    wallet?: Player_walletsNullableRelationFilter;

    @Field(() => Transfer_in_transactionsListRelationFilter, {nullable:true})
    transfer_in_transactions?: Transfer_in_transactionsListRelationFilter;

    @Field(() => Transfer_out_transactionsListRelationFilter, {nullable:true})
    transfer_out_transactions?: Transfer_out_transactionsListRelationFilter;
}
