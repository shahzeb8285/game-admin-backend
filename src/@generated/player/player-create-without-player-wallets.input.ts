import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateNestedOneWithoutPlayersInput } from '../agent/agent-create-nested-one-without-players.input';
import { PlayerLoginLogCreateNestedManyWithoutPlayersInput } from '../player-login-log/player-login-log-create-nested-many-without-players.input';
import { CurrentActivePlayersCreateNestedManyWithoutPlayersInput } from '../current-active-players/current-active-players-create-nested-many-without-players.input';
import { GameHistoryCreateNestedManyWithoutPlayersInput } from '../game-history/game-history-create-nested-many-without-players.input';
import { ManualAdjustmentCreateNestedManyWithoutPlayersInput } from '../manual-adjustment/manual-adjustment-create-nested-many-without-players.input';
import { WalletRequestCreateNestedManyWithoutPlayersInput } from '../wallet-request/wallet-request-create-nested-many-without-players.input';
import { DepositTransactionCreateNestedManyWithoutPlayersInput } from '../deposit-transaction/deposit-transaction-create-nested-many-without-players.input';
import { WithdrawalTransactionCreateNestedManyWithoutPlayersInput } from '../withdrawal-transaction/withdrawal-transaction-create-nested-many-without-players.input';
import { TransferInTransactionCreateNestedManyWithoutPlayersInput } from '../transfer-in-transaction/transfer-in-transaction-create-nested-many-without-players.input';
import { TransferOutTransactionCreateNestedManyWithoutPlayersInput } from '../transfer-out-transaction/transfer-out-transaction-create-nested-many-without-players.input';

@InputType()
export class PlayerCreateWithoutPlayer_walletsInput {

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

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:false})
    registration_date!: string;

    @Field(() => AgentCreateNestedOneWithoutPlayersInput, {nullable:false})
    agent!: AgentCreateNestedOneWithoutPlayersInput;

    @Field(() => PlayerLoginLogCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_login_logs?: PlayerLoginLogCreateNestedManyWithoutPlayersInput;

    @Field(() => CurrentActivePlayersCreateNestedManyWithoutPlayersInput, {nullable:true})
    current_active_players?: CurrentActivePlayersCreateNestedManyWithoutPlayersInput;

    @Field(() => GameHistoryCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_history?: GameHistoryCreateNestedManyWithoutPlayersInput;

    @Field(() => ManualAdjustmentCreateNestedManyWithoutPlayersInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentCreateNestedManyWithoutPlayersInput;

    @Field(() => WalletRequestCreateNestedManyWithoutPlayersInput, {nullable:true})
    wallet_requests?: WalletRequestCreateNestedManyWithoutPlayersInput;

    @Field(() => DepositTransactionCreateNestedManyWithoutPlayersInput, {nullable:true})
    deposit_transactions?: DepositTransactionCreateNestedManyWithoutPlayersInput;

    @Field(() => WithdrawalTransactionCreateNestedManyWithoutPlayersInput, {nullable:true})
    withdrawal_transactions?: WithdrawalTransactionCreateNestedManyWithoutPlayersInput;

    @Field(() => TransferInTransactionCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_in_transactions?: TransferInTransactionCreateNestedManyWithoutPlayersInput;

    @Field(() => TransferOutTransactionCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_out_transactions?: TransferOutTransactionCreateNestedManyWithoutPlayersInput;
}
