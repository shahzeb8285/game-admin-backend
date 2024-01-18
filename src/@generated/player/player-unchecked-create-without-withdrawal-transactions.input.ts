import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogUncheckedCreateNestedManyWithoutPlayersInput } from '../player-login-log/player-login-log-unchecked-create-nested-many-without-players.input';
import { CurrentActivePlayersUncheckedCreateNestedManyWithoutPlayersInput } from '../current-active-players/current-active-players-unchecked-create-nested-many-without-players.input';
import { GameHistoryUncheckedCreateNestedManyWithoutPlayersInput } from '../game-history/game-history-unchecked-create-nested-many-without-players.input';
import { ManualAdjustmentUncheckedCreateNestedManyWithoutPlayersInput } from '../manual-adjustment/manual-adjustment-unchecked-create-nested-many-without-players.input';
import { PlayerWalletUncheckedCreateNestedManyWithoutPlayersInput } from '../player-wallet/player-wallet-unchecked-create-nested-many-without-players.input';
import { WalletRequestUncheckedCreateNestedManyWithoutPlayersInput } from '../wallet-request/wallet-request-unchecked-create-nested-many-without-players.input';
import { DepositTransactionUncheckedCreateNestedManyWithoutPlayersInput } from '../deposit-transaction/deposit-transaction-unchecked-create-nested-many-without-players.input';
import { TransferInTransactionUncheckedCreateNestedManyWithoutPlayersInput } from '../transfer-in-transaction/transfer-in-transaction-unchecked-create-nested-many-without-players.input';
import { TransferOutTransactionUncheckedCreateNestedManyWithoutPlayersInput } from '../transfer-out-transaction/transfer-out-transaction-unchecked-create-nested-many-without-players.input';

@InputType()
export class PlayerUncheckedCreateWithoutWithdrawal_transactionsInput {

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    tg_id!: string;

    @Field(() => String, {nullable:false})
    tg_first_name!: string;

    @Field(() => String, {nullable:false})
    tg_last_name!: string;

    @Field(() => String, {nullable:false})
    tg_user_name!: string;

    @Field(() => String, {nullable:false})
    tg_photo_url!: string;

    @Field(() => String, {nullable:false})
    user_language!: string;

    @Field(() => String, {nullable:false})
    registration_ip!: string;

    @Field(() => String, {nullable:false})
    agent_id_r!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:false})
    registration_date!: string;

    @Field(() => PlayerLoginLogUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_login_logs?: PlayerLoginLogUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => CurrentActivePlayersUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    current_active_players?: CurrentActivePlayersUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => GameHistoryUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_history?: GameHistoryUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => ManualAdjustmentUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => PlayerWalletUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_wallets?: PlayerWalletUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => WalletRequestUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    wallet_requests?: WalletRequestUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => DepositTransactionUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    deposit_transactions?: DepositTransactionUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => TransferInTransactionUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_in_transactions?: TransferInTransactionUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => TransferOutTransactionUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_out_transactions?: TransferOutTransactionUncheckedCreateNestedManyWithoutPlayersInput;
}
