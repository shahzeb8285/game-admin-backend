import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../deposit-transactions/deposit-transactions-unchecked-update-many-without-players-nested.input';
import { withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transactions/withdrawal-transactions-unchecked-update-many-without-players-nested.input';
import { player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput } from '../player-login-logs/player-login-logs-unchecked-update-many-without-players-nested.input';
import { manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput } from '../manual-adjustments/manual-adjustments-unchecked-update-many-without-players-nested.input';
import { player_rebate_ratesUncheckedUpdateManyWithoutPlayersNestedInput } from '../player-rebate-rates/player-rebate-rates-unchecked-update-many-without-players-nested.input';
import { game_records_by_periodUncheckedUpdateManyWithoutPlayersNestedInput } from '../game-records-by-period/game-records-by-period-unchecked-update-many-without-players-nested.input';
import { game_records_by_dayUncheckedUpdateManyWithoutPlayersNestedInput } from '../game-records-by-day/game-records-by-day-unchecked-update-many-without-players-nested.input';
import { agent_records_by_dayUncheckedUpdateManyWithoutPlayersNestedInput } from '../agent-records-by-day/agent-records-by-day-unchecked-update-many-without-players-nested.input';
import { player_bank_accountsUncheckedUpdateManyWithoutPlayersNestedInput } from '../player-bank-accounts/player-bank-accounts-unchecked-update-many-without-players-nested.input';
import { transfer_in_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../transfer-in-transactions/transfer-in-transactions-unchecked-update-many-without-players-nested.input';
import { transfer_out_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../transfer-out-transactions/transfer-out-transactions-unchecked-update-many-without-players-nested.input';
import { wallet_requestsUncheckedUpdateManyWithoutPlayersNestedInput } from '../wallet-requests/wallet-requests-unchecked-update-many-without-players-nested.input';
import { game_round_infosUncheckedUpdateManyWithoutPlayersNestedInput } from '../game-round-infos/game-round-infos-unchecked-update-many-without-players-nested.input';
import { game_record_roundsUncheckedUpdateManyWithoutPlayersNestedInput } from '../game-record-rounds/game-record-rounds-unchecked-update-many-without-players-nested.input';

@InputType()
export class playersUncheckedUpdateWithoutPlayer_walletsInput {

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
    tg_username?: string;

    @Field(() => String, {nullable:true})
    tg_photo_url?: string;

    @Field(() => String, {nullable:true})
    user_language?: string;

    @Field(() => String, {nullable:true})
    registration_ip?: string;

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => String, {nullable:true})
    registration_date?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    fundist_password?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => deposit_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_login_logs?: player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_rebate_ratesUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_rebate_rates?: player_rebate_ratesUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_records_by_periodUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_records_by_period?: game_records_by_periodUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_records_by_dayUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_records_by_day?: game_records_by_dayUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => agent_records_by_dayUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_bank_accountsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_bank_accounts?: player_bank_accountsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => transfer_in_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => transfer_out_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => wallet_requestsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    wallet_requests?: wallet_requestsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_round_infosUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_round_infos?: game_round_infosUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_record_roundsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_record_rounds?: game_record_roundsUncheckedUpdateManyWithoutPlayersNestedInput;
}
