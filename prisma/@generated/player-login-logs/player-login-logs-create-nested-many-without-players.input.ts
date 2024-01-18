import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_login_logsCreateWithoutPlayersInput } from './player-login-logs-create-without-players.input';
import { Type } from 'class-transformer';
import { player_login_logsCreateOrConnectWithoutPlayersInput } from './player-login-logs-create-or-connect-without-players.input';
import { player_login_logsCreateManyPlayersInputEnvelope } from './player-login-logs-create-many-players-input-envelope.input';
import { player_login_logsWhereUniqueInput } from './player-login-logs-where-unique.input';

@InputType()
export class player_login_logsCreateNestedManyWithoutPlayersInput {

    @Field(() => [player_login_logsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => player_login_logsCreateWithoutPlayersInput)
    create?: Array<player_login_logsCreateWithoutPlayersInput>;

    @Field(() => [player_login_logsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => player_login_logsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<player_login_logsCreateOrConnectWithoutPlayersInput>;

    @Field(() => player_login_logsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => player_login_logsCreateManyPlayersInputEnvelope)
    createMany?: player_login_logsCreateManyPlayersInputEnvelope;

    @Field(() => [player_login_logsWhereUniqueInput], {nullable:true})
    @Type(() => player_login_logsWhereUniqueInput)
    connect?: Array<player_login_logsWhereUniqueInput>;
}
