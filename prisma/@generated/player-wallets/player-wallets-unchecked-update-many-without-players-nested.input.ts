import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsCreateWithoutPlayersInput } from './player-wallets-create-without-players.input';
import { Type } from 'class-transformer';
import { player_walletsCreateOrConnectWithoutPlayersInput } from './player-wallets-create-or-connect-without-players.input';
import { player_walletsUpsertWithWhereUniqueWithoutPlayersInput } from './player-wallets-upsert-with-where-unique-without-players.input';
import { player_walletsCreateManyPlayersInputEnvelope } from './player-wallets-create-many-players-input-envelope.input';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';
import { player_walletsUpdateWithWhereUniqueWithoutPlayersInput } from './player-wallets-update-with-where-unique-without-players.input';
import { player_walletsUpdateManyWithWhereWithoutPlayersInput } from './player-wallets-update-many-with-where-without-players.input';
import { player_walletsScalarWhereInput } from './player-wallets-scalar-where.input';

@InputType()
export class player_walletsUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [player_walletsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => player_walletsCreateWithoutPlayersInput)
    create?: Array<player_walletsCreateWithoutPlayersInput>;

    @Field(() => [player_walletsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => player_walletsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<player_walletsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [player_walletsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => player_walletsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<player_walletsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => player_walletsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => player_walletsCreateManyPlayersInputEnvelope)
    createMany?: player_walletsCreateManyPlayersInputEnvelope;

    @Field(() => [player_walletsWhereUniqueInput], {nullable:true})
    @Type(() => player_walletsWhereUniqueInput)
    set?: Array<player_walletsWhereUniqueInput>;

    @Field(() => [player_walletsWhereUniqueInput], {nullable:true})
    @Type(() => player_walletsWhereUniqueInput)
    disconnect?: Array<player_walletsWhereUniqueInput>;

    @Field(() => [player_walletsWhereUniqueInput], {nullable:true})
    @Type(() => player_walletsWhereUniqueInput)
    delete?: Array<player_walletsWhereUniqueInput>;

    @Field(() => [player_walletsWhereUniqueInput], {nullable:true})
    @Type(() => player_walletsWhereUniqueInput)
    connect?: Array<player_walletsWhereUniqueInput>;

    @Field(() => [player_walletsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => player_walletsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<player_walletsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [player_walletsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => player_walletsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<player_walletsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [player_walletsScalarWhereInput], {nullable:true})
    @Type(() => player_walletsScalarWhereInput)
    deleteMany?: Array<player_walletsScalarWhereInput>;
}
