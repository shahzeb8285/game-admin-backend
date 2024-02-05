import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../deposit-transactions/deposit-transactions-unchecked-create-nested-many-without-players.input';
import { withdrawal_transactionsUncheckedCreateNestedManyWithoutPlayersInput } from '../withdrawal-transactions/withdrawal-transactions-unchecked-create-nested-many-without-players.input';
import { manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput } from '../manual-adjustments/manual-adjustments-unchecked-create-nested-many-without-players.input';
import { rebate_transactionsUncheckedCreateNestedManyWithoutPlayerInput } from '../rebate-transactions/rebate-transactions-unchecked-create-nested-many-without-player.input';
import { game_record_roundsUncheckedCreateNestedManyWithoutPlayerInput } from '../game-record-rounds/game-record-rounds-unchecked-create-nested-many-without-player.input';

@InputType()
export class playersUncheckedCreateWithoutPlayer_login_logsInput {

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

    @Field(() => withdrawal_transactionsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedCreateNestedManyWithoutPlayersInput;

    @Field(() => rebate_transactionsUncheckedCreateNestedManyWithoutPlayerInput, {nullable:true})
    rebate_transactions?: rebate_transactionsUncheckedCreateNestedManyWithoutPlayerInput;

    @Field(() => game_record_roundsUncheckedCreateNestedManyWithoutPlayerInput, {nullable:true})
    game_record_rounds?: game_record_roundsUncheckedCreateNestedManyWithoutPlayerInput;
}
