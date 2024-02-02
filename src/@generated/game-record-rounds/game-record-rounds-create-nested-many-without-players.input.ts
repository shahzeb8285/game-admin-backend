import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutPlayersInput } from './game-record-rounds-create-without-players.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutPlayersInput } from './game-record-rounds-create-or-connect-without-players.input';
import { game_record_roundsCreateManyPlayersInputEnvelope } from './game-record-rounds-create-many-players-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';

@InputType()
export class game_record_roundsCreateNestedManyWithoutPlayersInput {

    @Field(() => [game_record_roundsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutPlayersInput)
    create?: Array<game_record_roundsCreateWithoutPlayersInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutPlayersInput>;

    @Field(() => game_record_roundsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyPlayersInputEnvelope)
    createMany?: game_record_roundsCreateManyPlayersInputEnvelope;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: Array<game_record_roundsWhereUniqueInput>;
}
