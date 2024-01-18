import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';
import { Type } from 'class-transformer';
import { player_walletsUpdateWithoutPlayersInput } from './player-wallets-update-without-players.input';

@InputType()
export class player_walletsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => player_walletsWhereUniqueInput, {nullable:false})
    @Type(() => player_walletsWhereUniqueInput)
    where!: player_walletsWhereUniqueInput;

    @Field(() => player_walletsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => player_walletsUpdateWithoutPlayersInput)
    data!: player_walletsUpdateWithoutPlayersInput;
}
