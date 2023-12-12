import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';
import { Type } from 'class-transformer';
import { player_walletsUpdateWithoutPlayersInput } from './player-wallets-update-without-players.input';

@InputType()
export class player_walletsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => player_walletsWhereUniqueInput, {nullable:false})
    @Type(() => player_walletsWhereUniqueInput)
    where!: Prisma.AtLeast<player_walletsWhereUniqueInput, 'player_wallet_id'>;

    @Field(() => player_walletsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => player_walletsUpdateWithoutPlayersInput)
    data!: player_walletsUpdateWithoutPlayersInput;
}
