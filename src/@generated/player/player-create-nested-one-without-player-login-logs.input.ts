import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutPlayer_login_logsInput } from './player-create-without-player-login-logs.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutPlayer_login_logsInput } from './player-create-or-connect-without-player-login-logs.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutPlayer_login_logsInput {

    @Field(() => PlayerCreateWithoutPlayer_login_logsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutPlayer_login_logsInput)
    create?: PlayerCreateWithoutPlayer_login_logsInput;

    @Field(() => PlayerCreateOrConnectWithoutPlayer_login_logsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutPlayer_login_logsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayer_login_logsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
