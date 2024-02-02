import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateWithoutSg_gameInput } from './game-record-rounds-create-without-sg-game.input';

@InputType()
export class game_record_roundsCreateOrConnectWithoutSg_gameInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsCreateWithoutSg_gameInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutSg_gameInput)
    create!: game_record_roundsCreateWithoutSg_gameInput;
}
