import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosWhereUniqueInput } from './game-round-infos-where-unique.input';
import { Type } from 'class-transformer';
import { game_round_infosCreateWithoutGame_record_roundsInput } from './game-round-infos-create-without-game-record-rounds.input';

@InputType()
export class game_round_infosCreateOrConnectWithoutGame_record_roundsInput {

    @Field(() => game_round_infosWhereUniqueInput, {nullable:false})
    @Type(() => game_round_infosWhereUniqueInput)
    where!: game_round_infosWhereUniqueInput;

    @Field(() => game_round_infosCreateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => game_round_infosCreateWithoutGame_record_roundsInput)
    create!: game_round_infosCreateWithoutGame_record_roundsInput;
}
