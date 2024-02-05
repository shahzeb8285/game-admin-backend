import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutGame_roundInput } from './game-record-rounds-create-without-game-round.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutGame_roundInput } from './game-record-rounds-create-or-connect-without-game-round.input';
import { game_record_roundsUpsertWithWhereUniqueWithoutGame_roundInput } from './game-record-rounds-upsert-with-where-unique-without-game-round.input';
import { game_record_roundsCreateManyGame_roundInputEnvelope } from './game-record-rounds-create-many-game-round-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { game_record_roundsUpdateWithWhereUniqueWithoutGame_roundInput } from './game-record-rounds-update-with-where-unique-without-game-round.input';
import { game_record_roundsUpdateManyWithWhereWithoutGame_roundInput } from './game-record-rounds-update-many-with-where-without-game-round.input';
import { game_record_roundsScalarWhereInput } from './game-record-rounds-scalar-where.input';

@InputType()
export class game_record_roundsUncheckedUpdateManyWithoutGame_roundNestedInput {

    @Field(() => [game_record_roundsCreateWithoutGame_roundInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutGame_roundInput)
    create?: Array<game_record_roundsCreateWithoutGame_roundInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutGame_roundInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutGame_roundInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutGame_roundInput>;

    @Field(() => [game_record_roundsUpsertWithWhereUniqueWithoutGame_roundInput], {nullable:true})
    @Type(() => game_record_roundsUpsertWithWhereUniqueWithoutGame_roundInput)
    upsert?: Array<game_record_roundsUpsertWithWhereUniqueWithoutGame_roundInput>;

    @Field(() => game_record_roundsCreateManyGame_roundInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyGame_roundInputEnvelope)
    createMany?: game_record_roundsCreateManyGame_roundInputEnvelope;

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

    @Field(() => [game_record_roundsUpdateWithWhereUniqueWithoutGame_roundInput], {nullable:true})
    @Type(() => game_record_roundsUpdateWithWhereUniqueWithoutGame_roundInput)
    update?: Array<game_record_roundsUpdateWithWhereUniqueWithoutGame_roundInput>;

    @Field(() => [game_record_roundsUpdateManyWithWhereWithoutGame_roundInput], {nullable:true})
    @Type(() => game_record_roundsUpdateManyWithWhereWithoutGame_roundInput)
    updateMany?: Array<game_record_roundsUpdateManyWithWhereWithoutGame_roundInput>;

    @Field(() => [game_record_roundsScalarWhereInput], {nullable:true})
    @Type(() => game_record_roundsScalarWhereInput)
    deleteMany?: Array<game_record_roundsScalarWhereInput>;
}
