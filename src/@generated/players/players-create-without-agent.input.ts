import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateNestedManyWithoutPlayersInput } from '../deposit-transactions/deposit-transactions-create-nested-many-without-players.input';
import { withdrawal_transactionsCreateNestedManyWithoutPlayersInput } from '../withdrawal-transactions/withdrawal-transactions-create-nested-many-without-players.input';
import { player_login_logsCreateNestedManyWithoutPlayersInput } from '../player-login-logs/player-login-logs-create-nested-many-without-players.input';
import { manual_adjustmentsCreateNestedManyWithoutPlayersInput } from '../manual-adjustments/manual-adjustments-create-nested-many-without-players.input';
import { rebate_transactionsCreateNestedManyWithoutPlayerInput } from '../rebate-transactions/rebate-transactions-create-nested-many-without-player.input';
import { game_record_roundsCreateNestedManyWithoutPlayerInput } from '../game-record-rounds/game-record-rounds-create-nested-many-without-player.input';

@InputType()
export class playersCreateWithoutAgentInput {

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

    @Field(() => deposit_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    deposit_transactions?: deposit_transactionsCreateNestedManyWithoutPlayersInput;

    @Field(() => withdrawal_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsCreateNestedManyWithoutPlayersInput;

    @Field(() => player_login_logsCreateNestedManyWithoutPlayersInput, {nullable:true})
    player_login_logs?: player_login_logsCreateNestedManyWithoutPlayersInput;

    @Field(() => manual_adjustmentsCreateNestedManyWithoutPlayersInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsCreateNestedManyWithoutPlayersInput;

    @Field(() => rebate_transactionsCreateNestedManyWithoutPlayerInput, {nullable:true})
    rebate_transactions?: rebate_transactionsCreateNestedManyWithoutPlayerInput;

    @Field(() => game_record_roundsCreateNestedManyWithoutPlayerInput, {nullable:true})
    game_record_rounds?: game_record_roundsCreateNestedManyWithoutPlayerInput;
}
