import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';
import { Type } from 'class-transformer';
import { player_walletsCreateWithoutPlayerInput } from './player-wallets-create-without-player.input';

@InputType()
export class player_walletsCreateOrConnectWithoutPlayerInput {

    @Field(() => player_walletsWhereUniqueInput, {nullable:false})
    @Type(() => player_walletsWhereUniqueInput)
    where!: player_walletsWhereUniqueInput;

    @Field(() => player_walletsCreateWithoutPlayerInput, {nullable:false})
    @Type(() => player_walletsCreateWithoutPlayerInput)
    create!: player_walletsCreateWithoutPlayerInput;
}
