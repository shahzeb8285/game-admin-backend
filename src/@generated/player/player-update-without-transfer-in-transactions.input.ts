import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentUpdateOneRequiredWithoutPlayersNestedInput } from '../agent/agent-update-one-required-without-players-nested.input';
import { PlayerLoginLogUpdateManyWithoutPlayersNestedInput } from '../player-login-log/player-login-log-update-many-without-players-nested.input';
import { CurrentActivePlayersUpdateManyWithoutPlayersNestedInput } from '../current-active-players/current-active-players-update-many-without-players-nested.input';
import { GameHistoryUpdateManyWithoutPlayersNestedInput } from '../game-history/game-history-update-many-without-players-nested.input';
import { ManualAdjustmentUpdateManyWithoutPlayersNestedInput } from '../manual-adjustment/manual-adjustment-update-many-without-players-nested.input';
import { PlayerWalletUpdateManyWithoutPlayersNestedInput } from '../player-wallet/player-wallet-update-many-without-players-nested.input';
import { WalletRequestUpdateManyWithoutPlayersNestedInput } from '../wallet-request/wallet-request-update-many-without-players-nested.input';
import { DepositTransactionUpdateManyWithoutPlayersNestedInput } from '../deposit-transaction/deposit-transaction-update-many-without-players-nested.input';
import { WithdrawalTransactionUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transaction/withdrawal-transaction-update-many-without-players-nested.input';
import { TransferOutTransactionUpdateManyWithoutPlayersNestedInput } from '../transfer-out-transaction/transfer-out-transaction-update-many-without-players-nested.input';

@InputType()
export class PlayerUpdateWithoutTransfer_in_transactionsInput {

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    tg_id?: string;

    @Field(() => String, {nullable:true})
    tg_first_name?: string;

    @Field(() => String, {nullable:true})
    tg_last_name?: string;

    @Field(() => String, {nullable:true})
    tg_user_name?: string;

    @Field(() => String, {nullable:true})
    tg_photo_url?: string;

    @Field(() => String, {nullable:true})
    user_language?: string;

    @Field(() => String, {nullable:true})
    registration_ip?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:true})
    registration_date?: string;

    @Field(() => AgentUpdateOneRequiredWithoutPlayersNestedInput, {nullable:true})
    agent?: AgentUpdateOneRequiredWithoutPlayersNestedInput;

    @Field(() => PlayerLoginLogUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_login_logs?: PlayerLoginLogUpdateManyWithoutPlayersNestedInput;

    @Field(() => CurrentActivePlayersUpdateManyWithoutPlayersNestedInput, {nullable:true})
    current_active_players?: CurrentActivePlayersUpdateManyWithoutPlayersNestedInput;

    @Field(() => GameHistoryUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_history?: GameHistoryUpdateManyWithoutPlayersNestedInput;

    @Field(() => ManualAdjustmentUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentUpdateManyWithoutPlayersNestedInput;

    @Field(() => PlayerWalletUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_wallets?: PlayerWalletUpdateManyWithoutPlayersNestedInput;

    @Field(() => WalletRequestUpdateManyWithoutPlayersNestedInput, {nullable:true})
    wallet_requests?: WalletRequestUpdateManyWithoutPlayersNestedInput;

    @Field(() => DepositTransactionUpdateManyWithoutPlayersNestedInput, {nullable:true})
    deposit_transactions?: DepositTransactionUpdateManyWithoutPlayersNestedInput;

    @Field(() => WithdrawalTransactionUpdateManyWithoutPlayersNestedInput, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionUpdateManyWithoutPlayersNestedInput;

    @Field(() => TransferOutTransactionUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_out_transactions?: TransferOutTransactionUpdateManyWithoutPlayersNestedInput;
}
