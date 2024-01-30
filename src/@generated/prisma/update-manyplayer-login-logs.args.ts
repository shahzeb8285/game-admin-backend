import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsUpdateManyMutationInput } from '../player-login-logs/player-login-logs-update-many-mutation.input';
import { Type } from 'class-transformer';
import { player_login_logsWhereInput } from '../player-login-logs/player-login-logs-where.input';

@ArgsType()
export class UpdateManyplayerLoginLogsArgs {

    @Field(() => player_login_logsUpdateManyMutationInput, {nullable:false})
    @Type(() => player_login_logsUpdateManyMutationInput)
    data!: player_login_logsUpdateManyMutationInput;

    @Field(() => player_login_logsWhereInput, {nullable:true})
    @Type(() => player_login_logsWhereInput)
    where?: player_login_logsWhereInput;
}
