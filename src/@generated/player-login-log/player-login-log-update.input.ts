import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateOneRequiredWithoutPlayer_login_logsNestedInput } from '../player/player-update-one-required-without-player-login-logs-nested.input';

@InputType()
export class PlayerLoginLogUpdateInput {

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;

    @Field(() => PlayerUpdateOneRequiredWithoutPlayer_login_logsNestedInput, {nullable:true})
    players?: PlayerUpdateOneRequiredWithoutPlayer_login_logsNestedInput;
}
