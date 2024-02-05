import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsUpdateWithoutPlayerInput } from './game-record-rounds-update-without-player.input';
import { game_record_roundsCreateWithoutPlayerInput } from './game-record-rounds-create-without-player.input';

@InputType()
export class game_record_roundsUpsertWithWhereUniqueWithoutPlayerInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsUpdateWithoutPlayerInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutPlayerInput)
    update!: game_record_roundsUpdateWithoutPlayerInput;

    @Field(() => game_record_roundsCreateWithoutPlayerInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutPlayerInput)
    create!: game_record_roundsCreateWithoutPlayerInput;
}
