import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_login_logsCreateManyInput } from '../player-login-logs/player-login-logs-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyplayerLoginLogsArgs {

    @Field(() => [player_login_logsCreateManyInput], {nullable:false})
    @Type(() => player_login_logsCreateManyInput)
    data!: Array<player_login_logsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
