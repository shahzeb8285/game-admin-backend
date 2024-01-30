import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsWhereUniqueInput } from '../player-login-logs/player-login-logs-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueplayerLoginLogsArgs {

    @Field(() => player_login_logsWhereUniqueInput, {nullable:false})
    @Type(() => player_login_logsWhereUniqueInput)
    where!: player_login_logsWhereUniqueInput;
}
