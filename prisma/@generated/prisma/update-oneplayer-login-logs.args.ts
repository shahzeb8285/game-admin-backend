import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsUpdateInput } from '../player-login-logs/player-login-logs-update.input';
import { Type } from 'class-transformer';
import { player_login_logsWhereUniqueInput } from '../player-login-logs/player-login-logs-where-unique.input';

@ArgsType()
export class UpdateOneplayerLoginLogsArgs {

    @Field(() => player_login_logsUpdateInput, {nullable:false})
    @Type(() => player_login_logsUpdateInput)
    data!: player_login_logsUpdateInput;

    @Field(() => player_login_logsWhereUniqueInput, {nullable:false})
    @Type(() => player_login_logsWhereUniqueInput)
    where!: player_login_logsWhereUniqueInput;
}
