import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogUpdateWithoutPlayersInput } from './player-login-log-update-without-players.input';

@InputType()
export class PlayerLoginLogUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerLoginLogWhereUniqueInput, 'player_id_r'>;

    @Field(() => PlayerLoginLogUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => PlayerLoginLogUpdateWithoutPlayersInput)
    data!: PlayerLoginLogUpdateWithoutPlayersInput;
}
