import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutPlayersInput } from './game-record-rounds-create-without-players.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutPlayersInput } from './game-record-rounds-create-or-connect-without-players.input';
import { game_record_roundsUpsertWithWhereUniqueWithoutPlayersInput } from './game-record-rounds-upsert-with-where-unique-without-players.input';
import { game_record_roundsCreateManyPlayersInputEnvelope } from './game-record-rounds-create-many-players-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { game_record_roundsUpdateWithWhereUniqueWithoutPlayersInput } from './game-record-rounds-update-with-where-unique-without-players.input';
import { game_record_roundsUpdateManyWithWhereWithoutPlayersInput } from './game-record-rounds-update-many-with-where-without-players.input';
import { game_record_roundsScalarWhereInput } from './game-record-rounds-scalar-where.input';

@InputType()
export class game_record_roundsUpdateManyWithoutPlayersNestedInput {

    @Field(() => [game_record_roundsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutPlayersInput)
    create?: Array<game_record_roundsCreateWithoutPlayersInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [game_record_roundsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_record_roundsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<game_record_roundsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => game_record_roundsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyPlayersInputEnvelope)
    createMany?: game_record_roundsCreateManyPlayersInputEnvelope;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    set?: Array<game_record_roundsWhereUniqueInput>;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    disconnect?: Array<game_record_roundsWhereUniqueInput>;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    delete?: Array<game_record_roundsWhereUniqueInput>;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: Array<game_record_roundsWhereUniqueInput>;

    @Field(() => [game_record_roundsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_record_roundsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<game_record_roundsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [game_record_roundsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => game_record_roundsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<game_record_roundsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [game_record_roundsScalarWhereInput], {nullable:true})
    @Type(() => game_record_roundsScalarWhereInput)
    deleteMany?: Array<game_record_roundsScalarWhereInput>;
}
