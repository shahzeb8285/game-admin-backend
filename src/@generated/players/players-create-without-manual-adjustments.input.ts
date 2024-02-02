import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateNestedOneWithoutPlayersInput } from '../agents/agents-create-nested-one-without-players.input';
import { deposit_transactionsCreateNestedManyWithoutPlayersInput } from '../deposit-transactions/deposit-transactions-create-nested-many-without-players.input';
import { withdrawal_transactionsCreateNestedManyWithoutPlayersInput } from '../withdrawal-transactions/withdrawal-transactions-create-nested-many-without-players.input';
import { player_login_logsCreateNestedManyWithoutPlayersInput } from '../player-login-logs/player-login-logs-create-nested-many-without-players.input';
import { player_rebate_ratesCreateNestedManyWithoutPlayersInput } from '../player-rebate-rates/player-rebate-rates-create-nested-many-without-players.input';
import { game_records_by_periodCreateNestedManyWithoutPlayersInput } from '../game-records-by-period/game-records-by-period-create-nested-many-without-players.input';
import { game_records_by_dayCreateNestedManyWithoutPlayersInput } from '../game-records-by-day/game-records-by-day-create-nested-many-without-players.input';
import { agent_records_by_dayCreateNestedManyWithoutPlayersInput } from '../agent-records-by-day/agent-records-by-day-create-nested-many-without-players.input';
import { player_bank_accountsCreateNestedManyWithoutPlayersInput } from '../player-bank-accounts/player-bank-accounts-create-nested-many-without-players.input';
import { player_walletsCreateNestedManyWithoutPlayersInput } from '../player-wallets/player-wallets-create-nested-many-without-players.input';
import { transfer_in_transactionsCreateNestedManyWithoutPlayersInput } from '../transfer-in-transactions/transfer-in-transactions-create-nested-many-without-players.input';
import { transfer_out_transactionsCreateNestedManyWithoutPlayersInput } from '../transfer-out-transactions/transfer-out-transactions-create-nested-many-without-players.input';
import { wallet_requestsCreateNestedManyWithoutPlayersInput } from '../wallet-requests/wallet-requests-create-nested-many-without-players.input';
import { game_round_infosCreateNestedManyWithoutPlayersInput } from '../game-round-infos/game-round-infos-create-nested-many-without-players.input';
import { game_record_roundsCreateNestedManyWithoutPlayersInput } from '../game-record-rounds/game-record-rounds-create-nested-many-without-players.input';

@InputType()
export class playersCreateWithoutManual_adjustmentsInput {

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

    @Field(() => agentsCreateNestedOneWithoutPlayersInput, {nullable:false})
    agent!: agentsCreateNestedOneWithoutPlayersInput;

    @Field(() => deposit_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    deposit_transactions?: deposit_transactionsCreateNestedManyWithoutPlayersInput;

    @Field(() => withdrawal_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsCreateNestedManyWithoutPlayersInput;

    @Field(() => player_login_logsCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_login_logs?: player_login_logsCreateNestedManyWithoutPlayersInput;

    @Field(() => player_rebate_ratesCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_rebate_rates?: player_rebate_ratesCreateNestedManyWithoutPlayersInput;

    @Field(() => game_records_by_periodCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_records_by_period?: game_records_by_periodCreateNestedManyWithoutPlayersInput;

    @Field(() => game_records_by_dayCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_records_by_day?: game_records_by_dayCreateNestedManyWithoutPlayersInput;

    @Field(() => agent_records_by_dayCreateNestedManyWithoutPlayersInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayCreateNestedManyWithoutPlayersInput;

    @Field(() => player_bank_accountsCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_bank_accounts?: player_bank_accountsCreateNestedManyWithoutPlayersInput;

    @Field(() => player_walletsCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_wallets?: player_walletsCreateNestedManyWithoutPlayersInput;

    @Field(() => transfer_in_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsCreateNestedManyWithoutPlayersInput;

    @Field(() => transfer_out_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsCreateNestedManyWithoutPlayersInput;

    @Field(() => wallet_requestsCreateNestedManyWithoutPlayersInput, {nullable:true})
    wallet_requests?: wallet_requestsCreateNestedManyWithoutPlayersInput;

    @Field(() => game_round_infosCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_round_infos?: game_round_infosCreateNestedManyWithoutPlayersInput;

    @Field(() => game_record_roundsCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_record_rounds?: game_record_roundsCreateNestedManyWithoutPlayersInput;
}
