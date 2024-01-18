import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { agentsUpdateOneRequiredWithoutPlayersNestedInput } from '../agents/agents-update-one-required-without-players-nested.input';
import { player_login_logsUpdateManyWithoutPlayersNestedInput } from '../player-login-logs/player-login-logs-update-many-without-players-nested.input';
import { current_active_playersUpdateManyWithoutPlayersNestedInput } from '../current-active-players/current-active-players-update-many-without-players-nested.input';
import { game_historyUpdateManyWithoutPlayersNestedInput } from '../game-history/game-history-update-many-without-players-nested.input';
import { manual_adjustmentsUpdateManyWithoutPlayersNestedInput } from '../manual-adjustments/manual-adjustments-update-many-without-players-nested.input';
import { player_walletsUpdateManyWithoutPlayersNestedInput } from '../player-wallets/player-wallets-update-many-without-players-nested.input';
import { deposit_transactionsUpdateManyWithoutPlayersNestedInput } from '../deposit-transactions/deposit-transactions-update-many-without-players-nested.input';
import { withdrawal_transactionsUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transactions/withdrawal-transactions-update-many-without-players-nested.input';
import { transfer_in_transactionsUpdateManyWithoutPlayersNestedInput } from '../transfer-in-transactions/transfer-in-transactions-update-many-without-players-nested.input';
import { transfer_out_transactionsUpdateManyWithoutPlayersNestedInput } from '../transfer-out-transactions/transfer-out-transactions-update-many-without-players-nested.input';

@InputType()
export class playersUpdateWithoutWallet_requestsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    player_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tg_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tg_first_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tg_last_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tg_user_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tg_photo_url?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    user_language?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    registration_ip?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    cdate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    udate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    registration_date?: StringFieldUpdateOperationsInput;

    @Field(() => agentsUpdateOneRequiredWithoutPlayersNestedInput, {nullable:true})
    agent?: agentsUpdateOneRequiredWithoutPlayersNestedInput;

    @Field(() => player_login_logsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_login_logs?: player_login_logsUpdateManyWithoutPlayersNestedInput;

    @Field(() => current_active_playersUpdateManyWithoutPlayersNestedInput, {nullable:true})
    current_active_players?: current_active_playersUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_historyUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_history?: game_historyUpdateManyWithoutPlayersNestedInput;

    @Field(() => manual_adjustmentsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_walletsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_wallets?: player_walletsUpdateManyWithoutPlayersNestedInput;

    @Field(() => deposit_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUpdateManyWithoutPlayersNestedInput;

    @Field(() => withdrawal_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUpdateManyWithoutPlayersNestedInput;

    @Field(() => transfer_in_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUpdateManyWithoutPlayersNestedInput;

    @Field(() => transfer_out_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUpdateManyWithoutPlayersNestedInput;
}
