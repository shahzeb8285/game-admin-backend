import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { player_login_logsWhereUniqueInput } from './player-login-logs-where-unique.input';
import { Type } from 'class-transformer';
import { player_login_logsCreateWithoutPlayersInput } from './player-login-logs-create-without-players.input';

@InputType()
export class player_login_logsCreateOrConnectWithoutPlayersInput {

    @Field(() => player_login_logsWhereUniqueInput, {nullable:false})
    @Type(() => player_login_logsWhereUniqueInput)
    where!: Prisma.AtLeast<player_login_logsWhereUniqueInput, 'player_id_r'>;

    @Field(() => player_login_logsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => player_login_logsCreateWithoutPlayersInput)
    create!: player_login_logsCreateWithoutPlayersInput;
}
