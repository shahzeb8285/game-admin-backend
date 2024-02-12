import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutGamesInput } from './game-record-rounds-create-without-games.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutGamesInput } from './game-record-rounds-create-or-connect-without-games.input';
import { game_record_roundsUpsertWithoutGamesInput } from './game-record-rounds-upsert-without-games.input';
import { game_record_roundsWhereInput } from './game-record-rounds-where.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { game_record_roundsUpdateToOneWithWhereWithoutGamesInput } from './game-record-rounds-update-to-one-with-where-without-games.input';

@InputType()
export class game_record_roundsUpdateOneWithoutGamesNestedInput {

    @Field(() => game_record_roundsCreateWithoutGamesInput, {nullable:true})
    @Type(() => game_record_roundsCreateWithoutGamesInput)
    create?: game_record_roundsCreateWithoutGamesInput;

    @Field(() => game_record_roundsCreateOrConnectWithoutGamesInput, {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutGamesInput)
    connectOrCreate?: game_record_roundsCreateOrConnectWithoutGamesInput;

    @Field(() => game_record_roundsUpsertWithoutGamesInput, {nullable:true})
    @Type(() => game_record_roundsUpsertWithoutGamesInput)
    upsert?: game_record_roundsUpsertWithoutGamesInput;

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    disconnect?: game_record_roundsWhereInput;

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    delete?: game_record_roundsWhereInput;

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsUpdateToOneWithWhereWithoutGamesInput, {nullable:true})
    @Type(() => game_record_roundsUpdateToOneWithWhereWithoutGamesInput)
    update?: game_record_roundsUpdateToOneWithWhereWithoutGamesInput;
}
