import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateOneRequiredWithoutPlayersNestedInput } from '../agents/agents-update-one-required-without-players-nested.input';
import { withdrawal_transactionsUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transactions/withdrawal-transactions-update-many-without-players-nested.input';
import { player_login_logsUpdateManyWithoutPlayersNestedInput } from '../player-login-logs/player-login-logs-update-many-without-players-nested.input';
import { manual_adjustmentsUpdateManyWithoutPlayersNestedInput } from '../manual-adjustments/manual-adjustments-update-many-without-players-nested.input';
import { rebate_transactionsUpdateManyWithoutPlayerNestedInput } from '../rebate-transactions/rebate-transactions-update-many-without-player-nested.input';
import { game_record_roundsUpdateManyWithoutPlayerNestedInput } from '../game-record-rounds/game-record-rounds-update-many-without-player-nested.input';
import { player_walletsUpdateOneWithoutPlayerNestedInput } from '../player-wallets/player-wallets-update-one-without-player-nested.input';
import { transfer_in_transactionsUpdateManyWithoutPlayerNestedInput } from '../transfer-in-transactions/transfer-in-transactions-update-many-without-player-nested.input';
import { transfer_out_transactionsUpdateManyWithoutPlayerNestedInput } from '../transfer-out-transactions/transfer-out-transactions-update-many-without-player-nested.input';

@InputType()
export class playersUpdateWithoutDeposit_transactionsInput {

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

    @Field(() => Date, {nullable:true})
    reg_date?: Date | string;

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

    @Field(() => withdrawal_transactionsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUpdateManyWithoutPlayersNestedInput;

    @Field(() => player_login_logsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    player_login_logs?: player_login_logsUpdateManyWithoutPlayersNestedInput;

    @Field(() => manual_adjustmentsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUpdateManyWithoutPlayersNestedInput;

    @Field(() => rebate_transactionsUpdateManyWithoutPlayerNestedInput, {nullable:true})
    rebate_transactions?: rebate_transactionsUpdateManyWithoutPlayerNestedInput;

    @Field(() => game_record_roundsUpdateManyWithoutPlayerNestedInput, {nullable:true})
    game_record_rounds?: game_record_roundsUpdateManyWithoutPlayerNestedInput;

    @Field(() => player_walletsUpdateOneWithoutPlayerNestedInput, {nullable:true})
    wallet?: player_walletsUpdateOneWithoutPlayerNestedInput;

    @Field(() => transfer_in_transactionsUpdateManyWithoutPlayerNestedInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUpdateManyWithoutPlayerNestedInput;

    @Field(() => transfer_out_transactionsUpdateManyWithoutPlayerNestedInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUpdateManyWithoutPlayerNestedInput;
}
