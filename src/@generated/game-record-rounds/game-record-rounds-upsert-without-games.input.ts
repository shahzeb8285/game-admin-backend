import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsUpdateWithoutGamesInput } from './game-record-rounds-update-without-games.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateWithoutGamesInput } from './game-record-rounds-create-without-games.input';
import { game_record_roundsWhereInput } from './game-record-rounds-where.input';

@InputType()
export class game_record_roundsUpsertWithoutGamesInput {

    @Field(() => game_record_roundsUpdateWithoutGamesInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutGamesInput)
    update!: game_record_roundsUpdateWithoutGamesInput;

    @Field(() => game_record_roundsCreateWithoutGamesInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutGamesInput)
    create!: game_record_roundsCreateWithoutGamesInput;

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    where?: game_record_roundsWhereInput;
}
