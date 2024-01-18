import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentRelationFilter } from '../agent/agent-relation-filter.input';
import { PlayerLoginLogListRelationFilter } from '../player-login-log/player-login-log-list-relation-filter.input';
import { CurrentActivePlayersListRelationFilter } from '../current-active-players/current-active-players-list-relation-filter.input';
import { GameHistoryListRelationFilter } from '../game-history/game-history-list-relation-filter.input';
import { ManualAdjustmentListRelationFilter } from '../manual-adjustment/manual-adjustment-list-relation-filter.input';
import { PlayerWalletListRelationFilter } from '../player-wallet/player-wallet-list-relation-filter.input';
import { WalletRequestListRelationFilter } from '../wallet-request/wallet-request-list-relation-filter.input';
import { DepositTransactionListRelationFilter } from '../deposit-transaction/deposit-transaction-list-relation-filter.input';
import { WithdrawalTransactionListRelationFilter } from '../withdrawal-transaction/withdrawal-transaction-list-relation-filter.input';
import { TransferInTransactionListRelationFilter } from '../transfer-in-transaction/transfer-in-transaction-list-relation-filter.input';
import { TransferOutTransactionListRelationFilter } from '../transfer-out-transaction/transfer-out-transaction-list-relation-filter.input';

@InputType()
export class PlayerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:true})
    tg_id?: string;

    @Field(() => String, {nullable:true})
    tg_user_name?: string;

    @Field(() => [PlayerWhereInput], {nullable:true})
    AND?: Array<PlayerWhereInput>;

    @Field(() => [PlayerWhereInput], {nullable:true})
    OR?: Array<PlayerWhereInput>;

    @Field(() => [PlayerWhereInput], {nullable:true})
    NOT?: Array<PlayerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_last_name?: StringFilter;

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

    @Field(() => AgentRelationFilter, {nullable:true})
    agent?: AgentRelationFilter;

    @Field(() => PlayerLoginLogListRelationFilter, {nullable:true})
    player_login_logs?: PlayerLoginLogListRelationFilter;

    @Field(() => CurrentActivePlayersListRelationFilter, {nullable:true})
    current_active_players?: CurrentActivePlayersListRelationFilter;

    @Field(() => GameHistoryListRelationFilter, {nullable:true})
    game_history?: GameHistoryListRelationFilter;

    @Field(() => ManualAdjustmentListRelationFilter, {nullable:true})
    manual_adjustments?: ManualAdjustmentListRelationFilter;

    @Field(() => PlayerWalletListRelationFilter, {nullable:true})
    player_wallets?: PlayerWalletListRelationFilter;

    @Field(() => WalletRequestListRelationFilter, {nullable:true})
    wallet_requests?: WalletRequestListRelationFilter;

    @Field(() => DepositTransactionListRelationFilter, {nullable:true})
    deposit_transactions?: DepositTransactionListRelationFilter;

    @Field(() => WithdrawalTransactionListRelationFilter, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionListRelationFilter;

    @Field(() => TransferInTransactionListRelationFilter, {nullable:true})
    transfer_in_transactions?: TransferInTransactionListRelationFilter;

    @Field(() => TransferOutTransactionListRelationFilter, {nullable:true})
    transfer_out_transactions?: TransferOutTransactionListRelationFilter;
}
