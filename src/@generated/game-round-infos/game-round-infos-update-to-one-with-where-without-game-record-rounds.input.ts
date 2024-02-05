import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosWhereInput } from './game-round-infos-where.input';
import { Type } from 'class-transformer';
import { game_round_infosUpdateWithoutGame_record_roundsInput } from './game-round-infos-update-without-game-record-rounds.input';

@InputType()
export class game_round_infosUpdateToOneWithWhereWithoutGame_record_roundsInput {

    @Field(() => game_round_infosWhereInput, {nullable:true})
    @Type(() => game_round_infosWhereInput)
    where?: game_round_infosWhereInput;

    @Field(() => game_round_infosUpdateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => game_round_infosUpdateWithoutGame_record_roundsInput)
    data!: game_round_infosUpdateWithoutGame_record_roundsInput;
}
