import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutPlayerInput } from './game-record-rounds-create-without-player.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutPlayerInput } from './game-record-rounds-create-or-connect-without-player.input';
import { game_record_roundsUpsertWithWhereUniqueWithoutPlayerInput } from './game-record-rounds-upsert-with-where-unique-without-player.input';
import { game_record_roundsCreateManyPlayerInputEnvelope } from './game-record-rounds-create-many-player-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { game_record_roundsUpdateWithWhereUniqueWithoutPlayerInput } from './game-record-rounds-update-with-where-unique-without-player.input';
import { game_record_roundsUpdateManyWithWhereWithoutPlayerInput } from './game-record-rounds-update-many-with-where-without-player.input';
import { game_record_roundsScalarWhereInput } from './game-record-rounds-scalar-where.input';

@InputType()
export class game_record_roundsUncheckedUpdateManyWithoutPlayerNestedInput {

    @Field(() => [game_record_roundsCreateWithoutPlayerInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutPlayerInput)
    create?: Array<game_record_roundsCreateWithoutPlayerInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutPlayerInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutPlayerInput>;

    @Field(() => [game_record_roundsUpsertWithWhereUniqueWithoutPlayerInput], {nullable:true})
    @Type(() => game_record_roundsUpsertWithWhereUniqueWithoutPlayerInput)
    upsert?: Array<game_record_roundsUpsertWithWhereUniqueWithoutPlayerInput>;

    @Field(() => game_record_roundsCreateManyPlayerInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyPlayerInputEnvelope)
    createMany?: game_record_roundsCreateManyPlayerInputEnvelope;

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

    @Field(() => [game_record_roundsUpdateWithWhereUniqueWithoutPlayerInput], {nullable:true})
    @Type(() => game_record_roundsUpdateWithWhereUniqueWithoutPlayerInput)
    update?: Array<game_record_roundsUpdateWithWhereUniqueWithoutPlayerInput>;

    @Field(() => [game_record_roundsUpdateManyWithWhereWithoutPlayerInput], {nullable:true})
    @Type(() => game_record_roundsUpdateManyWithWhereWithoutPlayerInput)
    updateMany?: Array<game_record_roundsUpdateManyWithWhereWithoutPlayerInput>;

    @Field(() => [game_record_roundsScalarWhereInput], {nullable:true})
    @Type(() => game_record_roundsScalarWhereInput)
    deleteMany?: Array<game_record_roundsScalarWhereInput>;
}
