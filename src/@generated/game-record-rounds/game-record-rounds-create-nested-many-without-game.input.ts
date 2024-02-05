import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutGameInput } from './game-record-rounds-create-without-game.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutGameInput } from './game-record-rounds-create-or-connect-without-game.input';
import { game_record_roundsCreateManyGameInputEnvelope } from './game-record-rounds-create-many-game-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';

@InputType()
export class game_record_roundsCreateNestedManyWithoutGameInput {

    @Field(() => [game_record_roundsCreateWithoutGameInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutGameInput)
    create?: Array<game_record_roundsCreateWithoutGameInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutGameInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutGameInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutGameInput>;

    @Field(() => game_record_roundsCreateManyGameInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyGameInputEnvelope)
    createMany?: game_record_roundsCreateManyGameInputEnvelope;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: Array<game_record_roundsWhereUniqueInput>;
}
