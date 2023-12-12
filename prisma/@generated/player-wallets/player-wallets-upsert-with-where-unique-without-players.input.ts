import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';
import { Type } from 'class-transformer';
import { player_walletsUpdateWithoutPlayersInput } from './player-wallets-update-without-players.input';
import { player_walletsCreateWithoutPlayersInput } from './player-wallets-create-without-players.input';

@InputType()
export class player_walletsUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => player_walletsWhereUniqueInput, {nullable:false})
    @Type(() => player_walletsWhereUniqueInput)
    where!: Prisma.AtLeast<player_walletsWhereUniqueInput, 'player_wallet_id'>;

    @Field(() => player_walletsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => player_walletsUpdateWithoutPlayersInput)
    update!: player_walletsUpdateWithoutPlayersInput;

    @Field(() => player_walletsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => player_walletsCreateWithoutPlayersInput)
    create!: player_walletsCreateWithoutPlayersInput;
}
