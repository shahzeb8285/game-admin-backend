import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsCreateInput } from '../player-login-logs/player-login-logs-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneplayerLoginLogsArgs {

    @Field(() => player_login_logsCreateInput, {nullable:false})
    @Type(() => player_login_logsCreateInput)
    data!: player_login_logsCreateInput;
}
