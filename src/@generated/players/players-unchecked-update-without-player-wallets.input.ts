import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput } from '../player-login-logs/player-login-logs-unchecked-update-many-without-players-nested.input';
import { current_active_playersUncheckedUpdateManyWithoutPlayersNestedInput } from '../current-active-players/current-active-players-unchecked-update-many-without-players-nested.input';
import { game_historyUncheckedUpdateManyWithoutPlayersNestedInput } from '../game-history/game-history-unchecked-update-many-without-players-nested.input';
import { manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput } from '../manual-adjustments/manual-adjustments-unchecked-update-many-without-players-nested.input';
import { wallet_requestsUncheckedUpdateManyWithoutPlayersNestedInput } from '../wallet-requests/wallet-requests-unchecked-update-many-without-players-nested.input';
import { deposit_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../deposit-transactions/deposit-transactions-unchecked-update-many-without-players-nested.input';
import { withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transactions/withdrawal-transactions-unchecked-update-many-without-players-nested.input';
import { transfer_in_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../transfer-in-transactions/transfer-in-transactions-unchecked-update-many-without-players-nested.input';
import { transfer_out_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../transfer-out-transactions/transfer-out-transactions-unchecked-update-many-without-players-nested.input';

@InputType()
export class playersUncheckedUpdateWithoutPlayer_walletsInput {

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    agent_id_r?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    cdate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    udate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    registration_date?: StringFieldUpdateOperationsInput;

    @Field(() => player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_login_logs?: player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => current_active_playersUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    current_active_players?: current_active_playersUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_historyUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_history?: game_historyUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => wallet_requestsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    wallet_requests?: wallet_requestsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => deposit_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => transfer_in_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => transfer_out_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;
}
