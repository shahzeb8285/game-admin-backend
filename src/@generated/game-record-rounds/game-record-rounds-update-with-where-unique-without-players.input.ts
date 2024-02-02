import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsUpdateWithoutPlayersInput } from './game-record-rounds-update-without-players.input';

@InputType()
export class game_record_roundsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutPlayersInput)
    data!: game_record_roundsUpdateWithoutPlayersInput;
}
