import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_login_logsWhereUniqueInput } from './player-login-logs-where-unique.input';
import { Type } from 'class-transformer';
import { player_login_logsUpdateWithoutPlayersInput } from './player-login-logs-update-without-players.input';

@InputType()
export class player_login_logsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => player_login_logsWhereUniqueInput, {nullable:false})
    @Type(() => player_login_logsWhereUniqueInput)
    where!: player_login_logsWhereUniqueInput;

    @Field(() => player_login_logsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => player_login_logsUpdateWithoutPlayersInput)
    data!: player_login_logsUpdateWithoutPlayersInput;
}
