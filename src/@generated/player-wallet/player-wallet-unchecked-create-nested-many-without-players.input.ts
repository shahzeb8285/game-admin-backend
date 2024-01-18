import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWalletCreateWithoutPlayersInput } from './player-wallet-create-without-players.input';
import { Type } from 'class-transformer';
import { PlayerWalletCreateOrConnectWithoutPlayersInput } from './player-wallet-create-or-connect-without-players.input';
import { PlayerWalletCreateManyPlayersInputEnvelope } from './player-wallet-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';

@InputType()
export class PlayerWalletUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [PlayerWalletCreateWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerWalletCreateWithoutPlayersInput)
    create?: Array<PlayerWalletCreateWithoutPlayersInput>;

    @Field(() => [PlayerWalletCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerWalletCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<PlayerWalletCreateOrConnectWithoutPlayersInput>;

    @Field(() => PlayerWalletCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => PlayerWalletCreateManyPlayersInputEnvelope)
    createMany?: PlayerWalletCreateManyPlayersInputEnvelope;

    @Field(() => [PlayerWalletWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWalletWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>>;
}
