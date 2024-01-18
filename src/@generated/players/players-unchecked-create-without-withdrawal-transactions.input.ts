import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_login_logsUncheckedCreateNestedManyWithoutPlayersInput } from '../player-login-logs/player-login-logs-unchecked-create-nested-many-without-players.input';
import { current_active_playersUncheckedCreateNestedManyWithoutPlayersInput } from '../current-active-players/current-active-players-unchecked-create-nested-many-without-players.input';
import { game_historyUncheckedCreateNestedManyWithoutPlayersInput } from '../game-history/game-history-unchecked-create-nested-many-without-players.input';
import { manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput } from '../manual-adjustments/manual-adjustments-unchecked-create-nested-many-without-players.input';
import { player_walletsUncheckedCreateNestedManyWithoutPlayersInput } from '../player-wallets/player-wallets-unchecked-create-nested-many-without-players.input';
import { wallet_requestsUncheckedCreateNestedManyWithoutPlayersInput } from '../wallet-requests/wallet-requests-unchecked-create-nested-many-without-players.input';
import { deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../deposit-transactions/deposit-transactions-unchecked-create-nested-many-without-players.input';
import { transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../transfer-in-transactions/transfer-in-transactions-unchecked-create-nested-many-without-players.input';
import { transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../transfer-out-transactions/transfer-out-transactions-unchecked-create-nested-many-without-players.input';

@InputType()
export class playersUncheckedCreateWithoutWithdrawal_transactionsInput {

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

    @Field(() => player_login_logsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_login_logs?: player_login_logsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => current_active_playersUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    current_active_players?: current_active_playersUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => game_historyUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_history?: game_historyUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => player_walletsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_wallets?: player_walletsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => wallet_requestsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    wallet_requests?: wallet_requestsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayersInput;
}
