import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutSg_gamesInput } from './game-record-rounds-create-without-sg-games.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutSg_gamesInput } from './game-record-rounds-create-or-connect-without-sg-games.input';
import { game_record_roundsUpsertWithoutSg_gamesInput } from './game-record-rounds-upsert-without-sg-games.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { game_record_roundsUpdateToOneWithWhereWithoutSg_gamesInput } from './game-record-rounds-update-to-one-with-where-without-sg-games.input';

@InputType()
export class game_record_roundsUpdateOneRequiredWithoutSg_gamesNestedInput {

    @Field(() => game_record_roundsCreateWithoutSg_gamesInput, {nullable:true})
    @Type(() => game_record_roundsCreateWithoutSg_gamesInput)
    create?: game_record_roundsCreateWithoutSg_gamesInput;

    @Field(() => game_record_roundsCreateOrConnectWithoutSg_gamesInput, {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutSg_gamesInput)
    connectOrCreate?: game_record_roundsCreateOrConnectWithoutSg_gamesInput;

    @Field(() => game_record_roundsUpsertWithoutSg_gamesInput, {nullable:true})
    @Type(() => game_record_roundsUpsertWithoutSg_gamesInput)
    upsert?: game_record_roundsUpsertWithoutSg_gamesInput;

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsUpdateToOneWithWhereWithoutSg_gamesInput, {nullable:true})
    @Type(() => game_record_roundsUpdateToOneWithWhereWithoutSg_gamesInput)
    update?: game_record_roundsUpdateToOneWithWhereWithoutSg_gamesInput;
}
