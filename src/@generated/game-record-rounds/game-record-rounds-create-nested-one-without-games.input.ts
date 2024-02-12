import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutGamesInput } from './game-record-rounds-create-without-games.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutGamesInput } from './game-record-rounds-create-or-connect-without-games.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';

@InputType()
export class game_record_roundsCreateNestedOneWithoutGamesInput {

    @Field(() => game_record_roundsCreateWithoutGamesInput, {nullable:true})
    @Type(() => game_record_roundsCreateWithoutGamesInput)
    create?: game_record_roundsCreateWithoutGamesInput;

    @Field(() => game_record_roundsCreateOrConnectWithoutGamesInput, {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutGamesInput)
    connectOrCreate?: game_record_roundsCreateOrConnectWithoutGamesInput;

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: game_record_roundsWhereUniqueInput;
}
