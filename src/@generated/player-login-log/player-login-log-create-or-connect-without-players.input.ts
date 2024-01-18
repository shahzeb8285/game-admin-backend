import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogCreateWithoutPlayersInput } from './player-login-log-create-without-players.input';

@InputType()
export class PlayerLoginLogCreateOrConnectWithoutPlayersInput {

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    where!: PlayerLoginLogWhereUniqueInput;

    @Field(() => PlayerLoginLogCreateWithoutPlayersInput, {nullable:false})
    @Type(() => PlayerLoginLogCreateWithoutPlayersInput)
    create!: PlayerLoginLogCreateWithoutPlayersInput;
}
