import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsCreateWithoutPlayersInput } from './player-wallets-create-without-players.input';
import { Type } from 'class-transformer';
import { player_walletsCreateOrConnectWithoutPlayersInput } from './player-wallets-create-or-connect-without-players.input';
import { player_walletsCreateManyPlayersInputEnvelope } from './player-wallets-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';

@InputType()
export class player_walletsCreateNestedManyWithoutPlayersInput {

    @Field(() => [player_walletsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => player_walletsCreateWithoutPlayersInput)
    create?: Array<player_walletsCreateWithoutPlayersInput>;

    @Field(() => [player_walletsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => player_walletsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<player_walletsCreateOrConnectWithoutPlayersInput>;

    @Field(() => player_walletsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => player_walletsCreateManyPlayersInputEnvelope)
    createMany?: player_walletsCreateManyPlayersInputEnvelope;

    @Field(() => [player_walletsWhereUniqueInput], {nullable:true})
    @Type(() => player_walletsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<player_walletsWhereUniqueInput, 'player_wallet_id'>>;
}
