import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutPlayerInput } from './game-record-rounds-create-without-player.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutPlayerInput } from './game-record-rounds-create-or-connect-without-player.input';
import { game_record_roundsCreateManyPlayerInputEnvelope } from './game-record-rounds-create-many-player-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';

@InputType()
export class game_record_roundsUncheckedCreateNestedManyWithoutPlayerInput {

    @Field(() => [game_record_roundsCreateWithoutPlayerInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutPlayerInput)
    create?: Array<game_record_roundsCreateWithoutPlayerInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutPlayerInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutPlayerInput>;

    @Field(() => game_record_roundsCreateManyPlayerInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyPlayerInputEnvelope)
    createMany?: game_record_roundsCreateManyPlayerInputEnvelope;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: Array<game_record_roundsWhereUniqueInput>;
}
