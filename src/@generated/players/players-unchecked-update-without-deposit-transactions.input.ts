import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transactions/withdrawal-transactions-unchecked-update-many-without-players-nested.input';
import { player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput } from '../player-login-logs/player-login-logs-unchecked-update-many-without-players-nested.input';
import { manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput } from '../manual-adjustments/manual-adjustments-unchecked-update-many-without-players-nested.input';
import { rebate_transactionsUncheckedUpdateManyWithoutPlayerNestedInput } from '../rebate-transactions/rebate-transactions-unchecked-update-many-without-player-nested.input';
import { game_record_roundsUncheckedUpdateManyWithoutPlayerNestedInput } from '../game-record-rounds/game-record-rounds-unchecked-update-many-without-player-nested.input';

@InputType()
export class playersUncheckedUpdateWithoutDeposit_transactionsInput {

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

    @Field(() => withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_login_logs?: player_login_logsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput;

    @Field(() => rebate_transactionsUncheckedUpdateManyWithoutPlayerNestedInput, {nullable:true})
    rebate_transactions?: rebate_transactionsUncheckedUpdateManyWithoutPlayerNestedInput;

    @Field(() => game_record_roundsUncheckedUpdateManyWithoutPlayerNestedInput, {nullable:true})
    game_record_rounds?: game_record_roundsUncheckedUpdateManyWithoutPlayerNestedInput;
}
