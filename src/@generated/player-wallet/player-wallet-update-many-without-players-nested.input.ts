import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWalletCreateWithoutPlayersInput } from './player-wallet-create-without-players.input';
import { Type } from 'class-transformer';
import { PlayerWalletCreateOrConnectWithoutPlayersInput } from './player-wallet-create-or-connect-without-players.input';
import { PlayerWalletUpsertWithWhereUniqueWithoutPlayersInput } from './player-wallet-upsert-with-where-unique-without-players.input';
import { PlayerWalletCreateManyPlayersInputEnvelope } from './player-wallet-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { PlayerWalletUpdateWithWhereUniqueWithoutPlayersInput } from './player-wallet-update-with-where-unique-without-players.input';
import { PlayerWalletUpdateManyWithWhereWithoutPlayersInput } from './player-wallet-update-many-with-where-without-players.input';
import { PlayerWalletScalarWhereInput } from './player-wallet-scalar-where.input';

@InputType()
export class PlayerWalletUpdateManyWithoutPlayersNestedInput {

    @Field(() => [PlayerWalletCreateWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerWalletCreateWithoutPlayersInput)
    create?: Array<PlayerWalletCreateWithoutPlayersInput>;

    @Field(() => [PlayerWalletCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerWalletCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<PlayerWalletCreateOrConnectWithoutPlayersInput>;

    @Field(() => [PlayerWalletUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerWalletUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<PlayerWalletUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => PlayerWalletCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => PlayerWalletCreateManyPlayersInputEnvelope)
    createMany?: PlayerWalletCreateManyPlayersInputEnvelope;

    @Field(() => [PlayerWalletWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWalletWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>>;

    @Field(() => [PlayerWalletWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWalletWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>>;

    @Field(() => [PlayerWalletWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWalletWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>>;

    @Field(() => [PlayerWalletWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWalletWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>>;

    @Field(() => [PlayerWalletUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerWalletUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<PlayerWalletUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [PlayerWalletUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => PlayerWalletUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<PlayerWalletUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [PlayerWalletScalarWhereInput], {nullable:true})
    @Type(() => PlayerWalletScalarWhereInput)
    deleteMany?: Array<PlayerWalletScalarWhereInput>;
}
