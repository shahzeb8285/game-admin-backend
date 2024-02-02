import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosWhereUniqueInput } from './game-round-infos-where-unique.input';
import { Type } from 'class-transformer';
import { game_round_infosUpdateWithoutPlayersInput } from './game-round-infos-update-without-players.input';
import { game_round_infosCreateWithoutPlayersInput } from './game-round-infos-create-without-players.input';

@InputType()
export class game_round_infosUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => game_round_infosWhereUniqueInput, {nullable:false})
    @Type(() => game_round_infosWhereUniqueInput)
    where!: game_round_infosWhereUniqueInput;

    @Field(() => game_round_infosUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => game_round_infosUpdateWithoutPlayersInput)
    update!: game_round_infosUpdateWithoutPlayersInput;

    @Field(() => game_round_infosCreateWithoutPlayersInput, {nullable:false})
    @Type(() => game_round_infosCreateWithoutPlayersInput)
    create!: game_round_infosCreateWithoutPlayersInput;
}
