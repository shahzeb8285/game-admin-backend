import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AgentOrderByWithRelationInput } from '../agent/agent-order-by-with-relation.input';
import { PlayerLoginLogOrderByRelationAggregateInput } from '../player-login-log/player-login-log-order-by-relation-aggregate.input';
import { CurrentActivePlayersOrderByRelationAggregateInput } from '../current-active-players/current-active-players-order-by-relation-aggregate.input';
import { GameHistoryOrderByRelationAggregateInput } from '../game-history/game-history-order-by-relation-aggregate.input';
import { ManualAdjustmentOrderByRelationAggregateInput } from '../manual-adjustment/manual-adjustment-order-by-relation-aggregate.input';
import { PlayerWalletOrderByRelationAggregateInput } from '../player-wallet/player-wallet-order-by-relation-aggregate.input';
import { WalletRequestOrderByRelationAggregateInput } from '../wallet-request/wallet-request-order-by-relation-aggregate.input';
import { DepositTransactionOrderByRelationAggregateInput } from '../deposit-transaction/deposit-transaction-order-by-relation-aggregate.input';
import { WithdrawalTransactionOrderByRelationAggregateInput } from '../withdrawal-transaction/withdrawal-transaction-order-by-relation-aggregate.input';
import { TransferInTransactionOrderByRelationAggregateInput } from '../transfer-in-transaction/transfer-in-transaction-order-by-relation-aggregate.input';
import { TransferOutTransactionOrderByRelationAggregateInput } from '../transfer-out-transaction/transfer-out-transaction-order-by-relation-aggregate.input';

@InputType()
export class PlayerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_last_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_user_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_photo_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_date?: keyof typeof SortOrder;

    @Field(() => AgentOrderByWithRelationInput, {nullable:true})
    agent?: AgentOrderByWithRelationInput;

    @Field(() => PlayerLoginLogOrderByRelationAggregateInput, {nullable:true})
    player_login_logs?: PlayerLoginLogOrderByRelationAggregateInput;

    @Field(() => CurrentActivePlayersOrderByRelationAggregateInput, {nullable:true})
    current_active_players?: CurrentActivePlayersOrderByRelationAggregateInput;

    @Field(() => GameHistoryOrderByRelationAggregateInput, {nullable:true})
    game_history?: GameHistoryOrderByRelationAggregateInput;

    @Field(() => ManualAdjustmentOrderByRelationAggregateInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentOrderByRelationAggregateInput;

    @Field(() => PlayerWalletOrderByRelationAggregateInput, {nullable:true})
    player_wallets?: PlayerWalletOrderByRelationAggregateInput;

    @Field(() => WalletRequestOrderByRelationAggregateInput, {nullable:true})
    wallet_requests?: WalletRequestOrderByRelationAggregateInput;

    @Field(() => DepositTransactionOrderByRelationAggregateInput, {nullable:true})
    deposit_transactions?: DepositTransactionOrderByRelationAggregateInput;

    @Field(() => WithdrawalTransactionOrderByRelationAggregateInput, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionOrderByRelationAggregateInput;

    @Field(() => TransferInTransactionOrderByRelationAggregateInput, {nullable:true})
    transfer_in_transactions?: TransferInTransactionOrderByRelationAggregateInput;

    @Field(() => TransferOutTransactionOrderByRelationAggregateInput, {nullable:true})
    transfer_out_transactions?: TransferOutTransactionOrderByRelationAggregateInput;
}
