import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsWhereInput } from '../player-login-logs/player-login-logs-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyplayerLoginLogsArgs {

    @Field(() => player_login_logsWhereInput, {nullable:true})
    @Type(() => player_login_logsWhereInput)
    where?: player_login_logsWhereInput;
}
