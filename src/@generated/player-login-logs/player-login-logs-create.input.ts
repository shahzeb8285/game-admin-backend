import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateNestedOneWithoutPlayer_login_logsInput } from '../players/players-create-nested-one-without-player-login-logs.input';

@InputType()
export class player_login_logsCreateInput {

    @Field(() => String, {nullable:true})
    player_login_log_id?: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;

    @Field(() => playersCreateNestedOneWithoutPlayer_login_logsInput, {nullable:false})
    players!: playersCreateNestedOneWithoutPlayer_login_logsInput;
}
