import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutPlayer_login_logsInput } from './players-create-without-player-login-logs.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutPlayer_login_logsInput } from './players-create-or-connect-without-player-login-logs.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutPlayer_login_logsInput {

    @Field(() => playersCreateWithoutPlayer_login_logsInput, {nullable:true})
    @Type(() => playersCreateWithoutPlayer_login_logsInput)
    create?: playersCreateWithoutPlayer_login_logsInput;

    @Field(() => playersCreateOrConnectWithoutPlayer_login_logsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutPlayer_login_logsInput)
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_login_logsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
