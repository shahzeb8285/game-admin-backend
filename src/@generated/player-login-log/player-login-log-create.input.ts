import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateNestedOneWithoutPlayer_login_logsInput } from '../player/player-create-nested-one-without-player-login-logs.input';

@InputType()
export class PlayerLoginLogCreateInput {

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date | string;

    @Field(() => PlayerCreateNestedOneWithoutPlayer_login_logsInput, {nullable:false})
    players!: PlayerCreateNestedOneWithoutPlayer_login_logsInput;
}
