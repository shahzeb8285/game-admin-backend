import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsUpdateWithoutGameInput } from './game-record-rounds-update-without-game.input';
import { game_record_roundsCreateWithoutGameInput } from './game-record-rounds-create-without-game.input';

@InputType()
export class game_record_roundsUpsertWithWhereUniqueWithoutGameInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsUpdateWithoutGameInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutGameInput)
    update!: game_record_roundsUpdateWithoutGameInput;

    @Field(() => game_record_roundsCreateWithoutGameInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutGameInput)
    create!: game_record_roundsCreateWithoutGameInput;
}
