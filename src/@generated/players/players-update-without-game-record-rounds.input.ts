import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateOneRequiredWithoutPlayersNestedInput } from '../agents/agents-update-one-required-without-players-nested.input';
import { deposit_transactionsUpdateManyWithoutPlayersNestedInput } from '../deposit-transactions/deposit-transactions-update-many-without-players-nested.input';
import { withdrawal_transactionsUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transactions/withdrawal-transactions-update-many-without-players-nested.input';
import { player_login_logsUpdateManyWithoutPlayersNestedInput } from '../player-login-logs/player-login-logs-update-many-without-players-nested.input';
import { manual_adjustmentsUpdateManyWithoutPlayersNestedInput } from '../manual-adjustments/manual-adjustments-update-many-without-players-nested.input';
import { player_rebate_ratesUpdateManyWithoutPlayersNestedInput } from '../player-rebate-rates/player-rebate-rates-update-many-without-players-nested.input';
import { game_records_by_periodUpdateManyWithoutPlayersNestedInput } from '../game-records-by-period/game-records-by-period-update-many-without-players-nested.input';
import { game_records_by_dayUpdateManyWithoutPlayersNestedInput } from '../game-records-by-day/game-records-by-day-update-many-without-players-nested.input';
import { agent_records_by_dayUpdateManyWithoutPlayersNestedInput } from '../agent-records-by-day/agent-records-by-day-update-many-without-players-nested.input';
import { player_bank_accountsUpdateManyWithoutPlayersNestedInput } from '../player-bank-accounts/player-bank-accounts-update-many-without-players-nested.input';
import { player_walletsUpdateManyWithoutPlayersNestedInput } from '../player-wallets/player-wallets-update-many-without-players-nested.input';
import { transfer_in_transactionsUpdateManyWithoutPlayersNestedInput } from '../transfer-in-transactions/transfer-in-transactions-update-many-without-players-nested.input';
import { transfer_out_transactionsUpdateManyWithoutPlayersNestedInput } from '../transfer-out-transactions/transfer-out-transactions-update-many-without-players-nested.input';
import { wallet_requestsUpdateManyWithoutPlayersNestedInput } from '../wallet-requests/wallet-requests-update-many-without-players-nested.input';
import { game_round_infosUpdateManyWithoutPlayersNestedInput } from '../game-round-infos/game-round-infos-update-many-without-players-nested.input';

@InputType()
export class playersUpdateWithoutGame_record_roundsInput {

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

    @Field(() => agentsUpdateOneRequiredWithoutPlayersNestedInput, {nullable:true})
    agent?: agentsUpdateOneRequiredWithoutPlayersNestedInput;

    @Field(() => deposit_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUpdateManyWithoutPlayersNestedInput;

    @Field(() => withdrawal_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_login_logsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_login_logs?: player_login_logsUpdateManyWithoutPlayersNestedInput;

    @Field(() => manual_adjustmentsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_rebate_ratesUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_rebate_rates?: player_rebate_ratesUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_records_by_periodUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_records_by_period?: game_records_by_periodUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_records_by_dayUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_records_by_day?: game_records_by_dayUpdateManyWithoutPlayersNestedInput;

    @Field(() => agent_records_by_dayUpdateManyWithoutPlayersNestedInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_bank_accountsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_bank_accounts?: player_bank_accountsUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_walletsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_wallets?: player_walletsUpdateManyWithoutPlayersNestedInput;

    @Field(() => transfer_in_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUpdateManyWithoutPlayersNestedInput;

    @Field(() => transfer_out_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUpdateManyWithoutPlayersNestedInput;

    @Field(() => wallet_requestsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    wallet_requests?: wallet_requestsUpdateManyWithoutPlayersNestedInput;

    @Field(() => game_round_infosUpdateManyWithoutPlayersNestedInput, {nullable:true})
    game_round_infos?: game_round_infosUpdateManyWithoutPlayersNestedInput;
}
