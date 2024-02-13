import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../deposit-transactions/deposit-transactions-unchecked-create-nested-many-without-players.input';
import { withdrawal_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../withdrawal-transactions/withdrawal-transactions-unchecked-create-nested-many-without-players.input';
import { player_login_logsUncheckedCreateNestedManyWithoutPlayersInput } from '../player-login-logs/player-login-logs-unchecked-create-nested-many-without-players.input';
import { manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput } from '../manual-adjustments/manual-adjustments-unchecked-create-nested-many-without-players.input';
import { game_record_roundsUncheckedCreateNestedManyWithoutPlayerInput } from '../game-record-rounds/game-record-rounds-unchecked-create-nested-many-without-player.input';
import { player_walletsUncheckedCreateNestedOneWithoutPlayerInput } from '../player-wallets/player-wallets-unchecked-create-nested-one-without-player.input';
import { transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayerInput } from '../transfer-in-transactions/transfer-in-transactions-unchecked-create-nested-many-without-player.input';
import { transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayerInput } from '../transfer-out-transactions/transfer-out-transactions-unchecked-create-nested-many-without-player.input';

@InputType()
export class playersUncheckedCreateWithoutRebate_transactionsInput {

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

    @Field(() => String, {nullable:true})
    tg_username?: string;

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

    @Field(() => withdrawal_transactionsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => player_login_logsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_login_logs?: player_login_logsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => game_record_roundsUncheckedCreateNestedManyWithoutPlayerInput, {nullable:true})
    game_record_rounds?: game_record_roundsUncheckedCreateNestedManyWithoutPlayerInput;

    @Field(() => player_walletsUncheckedCreateNestedOneWithoutPlayerInput, {nullable:true})
    wallet?: player_walletsUncheckedCreateNestedOneWithoutPlayerInput;

    @Field(() => transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayerInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayerInput;

    @Field(() => transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayerInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayerInput;
}
