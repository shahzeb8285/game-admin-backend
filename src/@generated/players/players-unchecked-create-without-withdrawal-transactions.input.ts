import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../deposit-transactions/deposit-transactions-unchecked-create-nested-many-without-players.input';
import { player_login_logsUncheckedCreateNestedManyWithoutPlayersInput } from '../player-login-logs/player-login-logs-unchecked-create-nested-many-without-players.input';
import { manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput } from '../manual-adjustments/manual-adjustments-unchecked-create-nested-many-without-players.input';
import { player_rebate_ratesUncheckedCreateNestedManyWithoutPlayersInput } from '../player-rebate-rates/player-rebate-rates-unchecked-create-nested-many-without-players.input';
import { game_records_by_periodUncheckedCreateNestedManyWithoutPlayersInput } from '../game-records-by-period/game-records-by-period-unchecked-create-nested-many-without-players.input';
import { game_records_by_dayUncheckedCreateNestedManyWithoutPlayersInput } from '../game-records-by-day/game-records-by-day-unchecked-create-nested-many-without-players.input';
import { agent_records_by_dayUncheckedCreateNestedManyWithoutPlayersInput } from '../agent-records-by-day/agent-records-by-day-unchecked-create-nested-many-without-players.input';
import { player_bank_accountsUncheckedCreateNestedManyWithoutPlayersInput } from '../player-bank-accounts/player-bank-accounts-unchecked-create-nested-many-without-players.input';
import { player_walletsUncheckedCreateNestedManyWithoutPlayersInput } from '../player-wallets/player-wallets-unchecked-create-nested-many-without-players.input';
import { transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../transfer-in-transactions/transfer-in-transactions-unchecked-create-nested-many-without-players.input';
import { transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../transfer-out-transactions/transfer-out-transactions-unchecked-create-nested-many-without-players.input';
import { wallet_requestsUncheckedCreateNestedManyWithoutPlayersInput } from '../wallet-requests/wallet-requests-unchecked-create-nested-many-without-players.input';
import { game_round_infosUncheckedCreateNestedManyWithoutPlayersInput } from '../game-round-infos/game-round-infos-unchecked-create-nested-many-without-players.input';
import { game_record_roundsUncheckedCreateNestedManyWithoutPlayersInput } from '../game-record-rounds/game-record-rounds-unchecked-create-nested-many-without-players.input';

@InputType()
export class playersUncheckedCreateWithoutWithdrawal_transactionsInput {

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    tg_id!: string;

    @Field(() => String, {nullable:false})
    tg_first_name!: string;

    @Field(() => String, {nullable:false})
    tg_last_name!: string;

    @Field(() => String, {nullable:false})
    tg_username!: string;

    @Field(() => String, {nullable:true})
    tg_photo_url?: string;

    @Field(() => String, {nullable:false})
    user_language!: string;

    @Field(() => String, {nullable:false})
    registration_ip!: string;

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => String, {nullable:false})
    registration_date!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    fundist_password!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => player_login_logsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_login_logs?: player_login_logsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => player_rebate_ratesUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_rebate_rates?: player_rebate_ratesUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => game_records_by_periodUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_records_by_period?: game_records_by_periodUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => game_records_by_dayUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_records_by_day?: game_records_by_dayUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => agent_records_by_dayUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => player_bank_accountsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_bank_accounts?: player_bank_accountsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => player_walletsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_wallets?: player_walletsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => wallet_requestsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    wallet_requests?: wallet_requestsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => game_round_infosUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_round_infos?: game_round_infosUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => game_record_roundsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_record_rounds?: game_record_roundsUncheckedCreateNestedManyWithoutPlayersInput;
}
