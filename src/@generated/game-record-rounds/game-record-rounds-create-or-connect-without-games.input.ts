import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateWithoutGamesInput } from './game-record-rounds-create-without-games.input';

@InputType()
export class game_record_roundsCreateOrConnectWithoutGamesInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsCreateWithoutGamesInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutGamesInput)
    create!: game_record_roundsCreateWithoutGamesInput;
}
