import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsCreateWithoutPlayerInput } from './player-wallets-create-without-player.input';
import { Type } from 'class-transformer';
import { player_walletsCreateOrConnectWithoutPlayerInput } from './player-wallets-create-or-connect-without-player.input';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';

@InputType()
export class player_walletsCreateNestedOneWithoutPlayerInput {

    @Field(() => player_walletsCreateWithoutPlayerInput, {nullable:true})
    @Type(() => player_walletsCreateWithoutPlayerInput)
    create?: player_walletsCreateWithoutPlayerInput;

    @Field(() => player_walletsCreateOrConnectWithoutPlayerInput, {nullable:true})
    @Type(() => player_walletsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: player_walletsCreateOrConnectWithoutPlayerInput;

    @Field(() => player_walletsWhereUniqueInput, {nullable:true})
    @Type(() => player_walletsWhereUniqueInput)
    connect?: player_walletsWhereUniqueInput;
}
