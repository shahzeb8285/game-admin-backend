import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateWithoutSg_gamesInput } from './game-record-rounds-create-without-sg-games.input';

@InputType()
export class game_record_roundsCreateOrConnectWithoutSg_gamesInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsCreateWithoutSg_gamesInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutSg_gamesInput)
    create!: game_record_roundsCreateWithoutSg_gamesInput;
}
