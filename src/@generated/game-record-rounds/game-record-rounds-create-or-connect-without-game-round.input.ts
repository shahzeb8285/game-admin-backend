import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateWithoutGame_roundInput } from './game-record-rounds-create-without-game-round.input';

@InputType()
export class game_record_roundsCreateOrConnectWithoutGame_roundInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsCreateWithoutGame_roundInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutGame_roundInput)
    create!: game_record_roundsCreateWithoutGame_roundInput;
}
