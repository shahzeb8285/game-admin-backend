import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';
import { Type } from 'class-transformer';
import { player_walletsCreateWithoutPlayersInput } from './player-wallets-create-without-players.input';

@InputType()
export class player_walletsCreateOrConnectWithoutPlayersInput {

    @Field(() => player_walletsWhereUniqueInput, {nullable:false})
    @Type(() => player_walletsWhereUniqueInput)
    where!: player_walletsWhereUniqueInput;

    @Field(() => player_walletsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => player_walletsCreateWithoutPlayersInput)
    create!: player_walletsCreateWithoutPlayersInput;
}
