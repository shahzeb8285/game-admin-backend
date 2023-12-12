import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateNestedOneWithoutPlayersInput } from '../agents/agents-create-nested-one-without-players.input';
import { player_login_logsCreateNestedManyWithoutPlayersInput } from '../player-login-logs/player-login-logs-create-nested-many-without-players.input';
import { current_active_playersCreateNestedManyWithoutPlayersInput } from '../current-active-players/current-active-players-create-nested-many-without-players.input';
import { game_historyCreateNestedManyWithoutPlayersInput } from '../game-history/game-history-create-nested-many-without-players.input';
import { manual_adjustmentsCreateNestedManyWithoutPlayersInput } from '../manual-adjustments/manual-adjustments-create-nested-many-without-players.input';
import { player_walletsCreateNestedManyWithoutPlayersInput } from '../player-wallets/player-wallets-create-nested-many-without-players.input';
import { wallet_requestsCreateNestedManyWithoutPlayersInput } from '../wallet-requests/wallet-requests-create-nested-many-without-players.input';
import { deposit_transactionsCreateNestedManyWithoutPlayersInput } from '../deposit-transactions/deposit-transactions-create-nested-many-without-players.input';
import { withdrawal_transactionsCreateNestedManyWithoutPlayersInput } from '../withdrawal-transactions/withdrawal-transactions-create-nested-many-without-players.input';
import { transfer_out_transactionsCreateNestedManyWithoutPlayersInput } from '../transfer-out-transactions/transfer-out-transactions-create-nested-many-without-players.input';

@InputType()
export class playersCreateWithoutTransfer_in_transactionsInput {

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

    @Field(() => agentsCreateNestedOneWithoutPlayersInput, {nullable:false})
    agent!: agentsCreateNestedOneWithoutPlayersInput;

    @Field(() => player_login_logsCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_login_logs?: player_login_logsCreateNestedManyWithoutPlayersInput;

    @Field(() => current_active_playersCreateNestedManyWithoutPlayersInput, {nullable:true})
    current_active_players?: current_active_playersCreateNestedManyWithoutPlayersInput;

    @Field(() => game_historyCreateNestedManyWithoutPlayersInput, {nullable:true})
    game_history?: game_historyCreateNestedManyWithoutPlayersInput;

    @Field(() => manual_adjustmentsCreateNestedManyWithoutPlayersInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsCreateNestedManyWithoutPlayersInput;

    @Field(() => player_walletsCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_wallets?: player_walletsCreateNestedManyWithoutPlayersInput;

    @Field(() => wallet_requestsCreateNestedManyWithoutPlayersInput, {nullable:true})
    wallet_requests?: wallet_requestsCreateNestedManyWithoutPlayersInput;

    @Field(() => deposit_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    deposit_transactions?: deposit_transactionsCreateNestedManyWithoutPlayersInput;

    @Field(() => withdrawal_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsCreateNestedManyWithoutPlayersInput;

    @Field(() => transfer_out_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsCreateNestedManyWithoutPlayersInput;
}
