import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsRelationFilter } from '../prisma/agents-relation-filter.input';
import { Deposit_transactionsListRelationFilter } from '../prisma/deposit-transactions-list-relation-filter.input';
import { Withdrawal_transactionsListRelationFilter } from '../prisma/withdrawal-transactions-list-relation-filter.input';
import { Player_login_logsListRelationFilter } from '../prisma/player-login-logs-list-relation-filter.input';
import { Manual_adjustmentsListRelationFilter } from '../prisma/manual-adjustments-list-relation-filter.input';
import { Player_rebate_ratesListRelationFilter } from '../prisma/player-rebate-rates-list-relation-filter.input';
import { Game_records_by_periodListRelationFilter } from '../prisma/game-records-by-period-list-relation-filter.input';
import { Game_records_by_dayListRelationFilter } from '../prisma/game-records-by-day-list-relation-filter.input';
import { Agent_records_by_dayListRelationFilter } from '../prisma/agent-records-by-day-list-relation-filter.input';
import { Player_bank_accountsListRelationFilter } from '../prisma/player-bank-accounts-list-relation-filter.input';
import { Player_walletsListRelationFilter } from '../prisma/player-wallets-list-relation-filter.input';
import { Transfer_in_transactionsListRelationFilter } from '../prisma/transfer-in-transactions-list-relation-filter.input';
import { Transfer_out_transactionsListRelationFilter } from '../prisma/transfer-out-transactions-list-relation-filter.input';
import { Wallet_requestsListRelationFilter } from '../prisma/wallet-requests-list-relation-filter.input';
import { Game_round_infosListRelationFilter } from '../prisma/game-round-infos-list-relation-filter.input';
import { Game_record_roundsListRelationFilter } from '../prisma/game-record-rounds-list-relation-filter.input';

@InputType()
export class playersWhereInput {

    @Field(() => [playersWhereInput], {nullable:true})
    AND?: Array<playersWhereInput>;

    @Field(() => [playersWhereInput], {nullable:true})
    OR?: Array<playersWhereInput>;

    @Field(() => [playersWhereInput], {nullable:true})
    NOT?: Array<playersWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    player_id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_last_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_username?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tg_photo_url?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    user_language?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_ip?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_date?: StringFilter;

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

    @Field(() => Player_rebate_ratesListRelationFilter, {nullable:true})
    player_rebate_rates?: Player_rebate_ratesListRelationFilter;

    @Field(() => Game_records_by_periodListRelationFilter, {nullable:true})
    game_records_by_period?: Game_records_by_periodListRelationFilter;

    @Field(() => Game_records_by_dayListRelationFilter, {nullable:true})
    game_records_by_day?: Game_records_by_dayListRelationFilter;

    @Field(() => Agent_records_by_dayListRelationFilter, {nullable:true})
    agent_records_by_day?: Agent_records_by_dayListRelationFilter;

    @Field(() => Player_bank_accountsListRelationFilter, {nullable:true})
    player_bank_accounts?: Player_bank_accountsListRelationFilter;

    @Field(() => Player_walletsListRelationFilter, {nullable:true})
    player_wallets?: Player_walletsListRelationFilter;

    @Field(() => Transfer_in_transactionsListRelationFilter, {nullable:true})
    transfer_in_transactions?: Transfer_in_transactionsListRelationFilter;

    @Field(() => Transfer_out_transactionsListRelationFilter, {nullable:true})
    transfer_out_transactions?: Transfer_out_transactionsListRelationFilter;

    @Field(() => Wallet_requestsListRelationFilter, {nullable:true})
    wallet_requests?: Wallet_requestsListRelationFilter;

    @Field(() => Game_round_infosListRelationFilter, {nullable:true})
    game_round_infos?: Game_round_infosListRelationFilter;

    @Field(() => Game_record_roundsListRelationFilter, {nullable:true})
    game_record_rounds?: Game_record_roundsListRelationFilter;
}
