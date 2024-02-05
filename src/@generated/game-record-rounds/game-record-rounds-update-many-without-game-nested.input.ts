import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutGameInput } from './game-record-rounds-create-without-game.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutGameInput } from './game-record-rounds-create-or-connect-without-game.input';
import { game_record_roundsUpsertWithWhereUniqueWithoutGameInput } from './game-record-rounds-upsert-with-where-unique-without-game.input';
import { game_record_roundsCreateManyGameInputEnvelope } from './game-record-rounds-create-many-game-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { game_record_roundsUpdateWithWhereUniqueWithoutGameInput } from './game-record-rounds-update-with-where-unique-without-game.input';
import { game_record_roundsUpdateManyWithWhereWithoutGameInput } from './game-record-rounds-update-many-with-where-without-game.input';
import { game_record_roundsScalarWhereInput } from './game-record-rounds-scalar-where.input';

@InputType()
export class game_record_roundsUpdateManyWithoutGameNestedInput {

    @Field(() => [game_record_roundsCreateWithoutGameInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutGameInput)
    create?: Array<game_record_roundsCreateWithoutGameInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutGameInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutGameInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutGameInput>;

    @Field(() => [game_record_roundsUpsertWithWhereUniqueWithoutGameInput], {nullable:true})
    @Type(() => game_record_roundsUpsertWithWhereUniqueWithoutGameInput)
    upsert?: Array<game_record_roundsUpsertWithWhereUniqueWithoutGameInput>;

    @Field(() => game_record_roundsCreateManyGameInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyGameInputEnvelope)
    createMany?: game_record_roundsCreateManyGameInputEnvelope;

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

    @Field(() => [game_record_roundsUpdateWithWhereUniqueWithoutGameInput], {nullable:true})
    @Type(() => game_record_roundsUpdateWithWhereUniqueWithoutGameInput)
    update?: Array<game_record_roundsUpdateWithWhereUniqueWithoutGameInput>;

    @Field(() => [game_record_roundsUpdateManyWithWhereWithoutGameInput], {nullable:true})
    @Type(() => game_record_roundsUpdateManyWithWhereWithoutGameInput)
    updateMany?: Array<game_record_roundsUpdateManyWithWhereWithoutGameInput>;

    @Field(() => [game_record_roundsScalarWhereInput], {nullable:true})
    @Type(() => game_record_roundsScalarWhereInput)
    deleteMany?: Array<game_record_roundsScalarWhereInput>;
}
