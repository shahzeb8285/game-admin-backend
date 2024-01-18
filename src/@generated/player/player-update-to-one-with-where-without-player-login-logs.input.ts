import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutPlayer_login_logsInput } from './player-update-without-player-login-logs.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutPlayer_login_logsInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutPlayer_login_logsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutPlayer_login_logsInput)
    data!: PlayerUpdateWithoutPlayer_login_logsInput;
}
