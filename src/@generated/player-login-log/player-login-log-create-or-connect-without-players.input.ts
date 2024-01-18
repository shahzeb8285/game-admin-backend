import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogCreateWithoutPlayersInput } from './player-login-log-create-without-players.input';

@InputType()
export class PlayerLoginLogCreateOrConnectWithoutPlayersInput {

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerLoginLogWhereUniqueInput, 'player_id_r'>;

    @Field(() => PlayerLoginLogCreateWithoutPlayersInput, {nullable:false})
    @Type(() => PlayerLoginLogCreateWithoutPlayersInput)
    create!: PlayerLoginLogCreateWithoutPlayersInput;
}
