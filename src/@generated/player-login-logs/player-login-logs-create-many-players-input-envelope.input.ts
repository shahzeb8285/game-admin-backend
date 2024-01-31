import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_login_logsCreateManyPlayersInput } from './player-login-logs-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class player_login_logsCreateManyPlayersInputEnvelope {

    @Field(() => [player_login_logsCreateManyPlayersInput], {nullable:false})
    @Type(() => player_login_logsCreateManyPlayersInput)
    data!: Array<player_login_logsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
