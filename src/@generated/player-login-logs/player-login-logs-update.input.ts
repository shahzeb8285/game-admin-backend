import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateOneRequiredWithoutPlayer_login_logsNestedInput } from '../players/players-update-one-required-without-player-login-logs-nested.input';

@InputType()
export class player_login_logsUpdateInput {

    @Field(() => String, {nullable:true})
    player_login_log_id?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;

    @Field(() => playersUpdateOneRequiredWithoutPlayer_login_logsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutPlayer_login_logsNestedInput;
}
