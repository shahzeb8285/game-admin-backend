import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosCreateWithoutPlayersInput } from './game-round-infos-create-without-players.input';
import { Type } from 'class-transformer';
import { game_round_infosCreateOrConnectWithoutPlayersInput } from './game-round-infos-create-or-connect-without-players.input';
import { game_round_infosCreateManyPlayersInputEnvelope } from './game-round-infos-create-many-players-input-envelope.input';
import { game_round_infosWhereUniqueInput } from './game-round-infos-where-unique.input';

@InputType()
export class game_round_infosUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [game_round_infosCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_round_infosCreateWithoutPlayersInput)
    create?: Array<game_round_infosCreateWithoutPlayersInput>;

    @Field(() => [game_round_infosCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_round_infosCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_round_infosCreateOrConnectWithoutPlayersInput>;

    @Field(() => game_round_infosCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_round_infosCreateManyPlayersInputEnvelope)
    createMany?: game_round_infosCreateManyPlayersInputEnvelope;

    @Field(() => [game_round_infosWhereUniqueInput], {nullable:true})
    @Type(() => game_round_infosWhereUniqueInput)
    connect?: Array<game_round_infosWhereUniqueInput>;
}
