import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutPlayer_login_logsInput } from './player-create-without-player-login-logs.input';

@InputType()
export class PlayerCreateOrConnectWithoutPlayer_login_logsInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateWithoutPlayer_login_logsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutPlayer_login_logsInput)
    create!: PlayerCreateWithoutPlayer_login_logsInput;
}
