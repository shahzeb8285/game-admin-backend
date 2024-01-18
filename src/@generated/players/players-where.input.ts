import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsRelationFilter } from '../prisma/agents-relation-filter.input';
import { Player_login_logsListRelationFilter } from '../prisma/player-login-logs-list-relation-filter.input';
import { Current_active_playersListRelationFilter } from '../prisma/current-active-players-list-relation-filter.input';
import { Game_historyListRelationFilter } from '../prisma/game-history-list-relation-filter.input';
import { Manual_adjustmentsListRelationFilter } from '../prisma/manual-adjustments-list-relation-filter.input';
import { Player_walletsListRelationFilter } from '../prisma/player-wallets-list-relation-filter.input';
import { Wallet_requestsListRelationFilter } from '../prisma/wallet-requests-list-relation-filter.input';
import { Deposit_transactionsListRelationFilter } from '../prisma/deposit-transactions-list-relation-filter.input';
import { Withdrawal_transactionsListRelationFilter } from '../prisma/withdrawal-transactions-list-relation-filter.input';
import { Transfer_in_transactionsListRelationFilter } from '../prisma/transfer-in-transactions-list-relation-filter.input';
import { Transfer_out_transactionsListRelationFilter } from '../prisma/transfer-out-transactions-list-relation-filter.input';

@InputType()
export class playersWhereInput {

    @Field(() => [playersWhereInput], {nullable:true})
    AND?: Array<playersWhereInput>;

    @Field(() => [playersWhereInput], {nullable:true})
    OR?: Array<playersWhereInput>;

    @Field(() => [playersWhereInput], {nullable:true})
    NOT?: Array<playersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_last_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_user_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_photo_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_language?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_ip?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id_r?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_date?: StringFilter;

    @Field(() => AgentsRelationFilter, {nullable:true})
    agent?: AgentsRelationFilter;

    @Field(() => Player_login_logsListRelationFilter, {nullable:true})
    player_login_logs?: Player_login_logsListRelationFilter;

    @Field(() => Current_active_playersListRelationFilter, {nullable:true})
    current_active_players?: Current_active_playersListRelationFilter;

    @Field(() => Game_historyListRelationFilter, {nullable:true})
    game_history?: Game_historyListRelationFilter;

    @Field(() => Manual_adjustmentsListRelationFilter, {nullable:true})
    manual_adjustments?: Manual_adjustmentsListRelationFilter;

    @Field(() => Player_walletsListRelationFilter, {nullable:true})
    player_wallets?: Player_walletsListRelationFilter;

    @Field(() => Wallet_requestsListRelationFilter, {nullable:true})
    wallet_requests?: Wallet_requestsListRelationFilter;

    @Field(() => Deposit_transactionsListRelationFilter, {nullable:true})
    deposit_transactions?: Deposit_transactionsListRelationFilter;

    @Field(() => Withdrawal_transactionsListRelationFilter, {nullable:true})
    withdrawal_transactions?: Withdrawal_transactionsListRelationFilter;

    @Field(() => Transfer_in_transactionsListRelationFilter, {nullable:true})
    transfer_in_transactions?: Transfer_in_transactionsListRelationFilter;

    @Field(() => Transfer_out_transactionsListRelationFilter, {nullable:true})
    transfer_out_transactions?: Transfer_out_transactionsListRelationFilter;
}
