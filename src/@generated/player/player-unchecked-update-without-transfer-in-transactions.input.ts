import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogUncheckedUpdateManyWithoutPlayersNestedInput } from '../player-login-log/player-login-log-unchecked-update-many-without-players-nested.input';
import { CurrentActivePlayersUncheckedUpdateManyWithoutPlayersNestedInput } from '../current-active-players/current-active-players-unchecked-update-many-without-players-nested.input';
import { GameHistoryUncheckedUpdateManyWithoutPlayersNestedInput } from '../game-history/game-history-unchecked-update-many-without-players-nested.input';
import { ManualAdjustmentUncheckedUpdateManyWithoutPlayersNestedInput } from '../manual-adjustment/manual-adjustment-unchecked-update-many-without-players-nested.input';
import { PlayerWalletUncheckedUpdateManyWithoutPlayersNestedInput } from '../player-wallet/player-wallet-unchecked-update-many-without-players-nested.input';
import { WalletRequestUncheckedUpdateManyWithoutPlayersNestedInput } from '../wallet-request/wallet-request-unchecked-update-many-without-players-nested.input';
import { DepositTransactionUncheckedUpdateManyWithoutPlayersNestedInput } from '../deposit-transaction/deposit-transaction-unchecked-update-many-without-players-nested.input';
import { WithdrawalTransactionUncheckedUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transaction/withdrawal-transaction-unchecked-update-many-without-players-nested.input';
import { TransferOutTransactionUncheckedUpdateManyWithoutPlayersNestedInput } from '../transfer-out-transaction/transfer-out-transaction-unchecked-update-many-without-players-nested.input';

@InputType()
export class PlayerUncheckedUpdateWithoutTransfer_in_transactionsInput {

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

    @Field(() => String, {nullable:true})
    agent_id_r?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:true})
    registration_date?: string;

    @Field(() => PlayerLoginLogUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_login_logs?: PlayerLoginLogUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => CurrentActivePlayersUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    current_active_players?: CurrentActivePlayersUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => GameHistoryUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_history?: GameHistoryUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => ManualAdjustmentUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => PlayerWalletUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_wallets?: PlayerWalletUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => WalletRequestUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    wallet_requests?: WalletRequestUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => DepositTransactionUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    deposit_transactions?: DepositTransactionUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => WithdrawalTransactionUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => TransferOutTransactionUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_out_transactions?: TransferOutTransactionUncheckedUpdateManyWithoutPlayersNestedInput;
}
