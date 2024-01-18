import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutPlayer_login_logsInput } from './player-update-without-player-login-logs.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutPlayer_login_logsInput } from './player-create-without-player-login-logs.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutPlayer_login_logsInput {

    @Field(() => PlayerUpdateWithoutPlayer_login_logsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutPlayer_login_logsInput)
    update!: PlayerUpdateWithoutPlayer_login_logsInput;

    @Field(() => PlayerCreateWithoutPlayer_login_logsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutPlayer_login_logsInput)
    create!: PlayerCreateWithoutPlayer_login_logsInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
