import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsWhereUniqueInput } from '../player-login-logs/player-login-logs-where-unique.input';
import { Type } from 'class-transformer';
import { player_login_logsCreateInput } from '../player-login-logs/player-login-logs-create.input';
import { player_login_logsUpdateInput } from '../player-login-logs/player-login-logs-update.input';

@ArgsType()
export class UpsertOneplayerLoginLogsArgs {

    @Field(() => player_login_logsWhereUniqueInput, {nullable:false})
    @Type(() => player_login_logsWhereUniqueInput)
    where!: player_login_logsWhereUniqueInput;

    @Field(() => player_login_logsCreateInput, {nullable:false})
    @Type(() => player_login_logsCreateInput)
    create!: player_login_logsCreateInput;

    @Field(() => player_login_logsUpdateInput, {nullable:false})
    @Type(() => player_login_logsUpdateInput)
    update!: player_login_logsUpdateInput;
}
