import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosCreateWithoutPlayersInput } from './game-round-infos-create-without-players.input';
import { Type } from 'class-transformer';
import { game_round_infosCreateOrConnectWithoutPlayersInput } from './game-round-infos-create-or-connect-without-players.input';
import { game_round_infosUpsertWithWhereUniqueWithoutPlayersInput } from './game-round-infos-upsert-with-where-unique-without-players.input';
import { game_round_infosCreateManyPlayersInputEnvelope } from './game-round-infos-create-many-players-input-envelope.input';
import { game_round_infosWhereUniqueInput } from './game-round-infos-where-unique.input';
import { game_round_infosUpdateWithWhereUniqueWithoutPlayersInput } from './game-round-infos-update-with-where-unique-without-players.input';
import { game_round_infosUpdateManyWithWhereWithoutPlayersInput } from './game-round-infos-update-many-with-where-without-players.input';
import { game_round_infosScalarWhereInput } from './game-round-infos-scalar-where.input';

@InputType()
export class game_round_infosUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [game_round_infosCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_round_infosCreateWithoutPlayersInput)
    create?: Array<game_round_infosCreateWithoutPlayersInput>;

    @Field(() => [game_round_infosCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_round_infosCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_round_infosCreateOrConnectWithoutPlayersInput>;

    @Field(() => [game_round_infosUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_round_infosUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<game_round_infosUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => game_round_infosCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_round_infosCreateManyPlayersInputEnvelope)
    createMany?: game_round_infosCreateManyPlayersInputEnvelope;

    @Field(() => [game_round_infosWhereUniqueInput], {nullable:true})
    @Type(() => game_round_infosWhereUniqueInput)
    set?: Array<game_round_infosWhereUniqueInput>;

    @Field(() => [game_round_infosWhereUniqueInput], {nullable:true})
    @Type(() => game_round_infosWhereUniqueInput)
    disconnect?: Array<game_round_infosWhereUniqueInput>;

    @Field(() => [game_round_infosWhereUniqueInput], {nullable:true})
    @Type(() => game_round_infosWhereUniqueInput)
    delete?: Array<game_round_infosWhereUniqueInput>;

    @Field(() => [game_round_infosWhereUniqueInput], {nullable:true})
    @Type(() => game_round_infosWhereUniqueInput)
    connect?: Array<game_round_infosWhereUniqueInput>;

    @Field(() => [game_round_infosUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_round_infosUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<game_round_infosUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [game_round_infosUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => game_round_infosUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<game_round_infosUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [game_round_infosScalarWhereInput], {nullable:true})
    @Type(() => game_round_infosScalarWhereInput)
    deleteMany?: Array<game_round_infosScalarWhereInput>;
}
