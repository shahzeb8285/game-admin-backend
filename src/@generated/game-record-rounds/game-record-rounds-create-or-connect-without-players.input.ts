import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateWithoutPlayersInput } from './game-record-rounds-create-without-players.input';

@InputType()
export class game_record_roundsCreateOrConnectWithoutPlayersInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutPlayersInput)
    create!: game_record_roundsCreateWithoutPlayersInput;
}
