import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateOneRequiredWithoutPlayersNestedInput } from '../agents/agents-update-one-required-without-players-nested.input';
import { deposit_transactionsUpdateManyWithoutPlayersNestedInput } from '../deposit-transactions/deposit-transactions-update-many-without-players-nested.input';
import { withdrawal_transactionsUpdateManyWithoutPlayersNestedInput } from '../withdrawal-transactions/withdrawal-transactions-update-many-without-players-nested.input';
import { manual_adjustmentsUpdateManyWithoutPlayersNestedInput } from '../manual-adjustments/manual-adjustments-update-many-without-players-nested.input';

@InputType()
export class playersUpdateWithoutPlayer_login_logsInput {

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

    @Field(() => manual_adjustmentsUpdateManyWithoutPlayersNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUpdateManyWithoutPlayersNestedInput;
}
