import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesCreateWithoutGame_record_roundsInput } from './sg-games-create-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { sg_gamesCreateOrConnectWithoutGame_record_roundsInput } from './sg-games-create-or-connect-without-game-record-rounds.input';
import { sg_gamesUpsertWithWhereUniqueWithoutGame_record_roundsInput } from './sg-games-upsert-with-where-unique-without-game-record-rounds.input';
import { sg_gamesCreateManyGame_record_roundsInputEnvelope } from './sg-games-create-many-game-record-rounds-input-envelope.input';
import { sg_gamesWhereUniqueInput } from './sg-games-where-unique.input';
import { sg_gamesUpdateWithWhereUniqueWithoutGame_record_roundsInput } from './sg-games-update-with-where-unique-without-game-record-rounds.input';
import { sg_gamesUpdateManyWithWhereWithoutGame_record_roundsInput } from './sg-games-update-many-with-where-without-game-record-rounds.input';
import { sg_gamesScalarWhereInput } from './sg-games-scalar-where.input';

@InputType()
export class sg_gamesUpdateManyWithoutGame_record_roundsNestedInput {

    @Field(() => [sg_gamesCreateWithoutGame_record_roundsInput], {nullable:true})
    @Type(() => sg_gamesCreateWithoutGame_record_roundsInput)
    create?: Array<sg_gamesCreateWithoutGame_record_roundsInput>;

    @Field(() => [sg_gamesCreateOrConnectWithoutGame_record_roundsInput], {nullable:true})
    @Type(() => sg_gamesCreateOrConnectWithoutGame_record_roundsInput)
    connectOrCreate?: Array<sg_gamesCreateOrConnectWithoutGame_record_roundsInput>;

    @Field(() => [sg_gamesUpsertWithWhereUniqueWithoutGame_record_roundsInput], {nullable:true})
    @Type(() => sg_gamesUpsertWithWhereUniqueWithoutGame_record_roundsInput)
    upsert?: Array<sg_gamesUpsertWithWhereUniqueWithoutGame_record_roundsInput>;

    @Field(() => sg_gamesCreateManyGame_record_roundsInputEnvelope, {nullable:true})
    @Type(() => sg_gamesCreateManyGame_record_roundsInputEnvelope)
    createMany?: sg_gamesCreateManyGame_record_roundsInputEnvelope;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    set?: Array<sg_gamesWhereUniqueInput>;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    disconnect?: Array<sg_gamesWhereUniqueInput>;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    delete?: Array<sg_gamesWhereUniqueInput>;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    connect?: Array<sg_gamesWhereUniqueInput>;

    @Field(() => [sg_gamesUpdateWithWhereUniqueWithoutGame_record_roundsInput], {nullable:true})
    @Type(() => sg_gamesUpdateWithWhereUniqueWithoutGame_record_roundsInput)
    update?: Array<sg_gamesUpdateWithWhereUniqueWithoutGame_record_roundsInput>;

    @Field(() => [sg_gamesUpdateManyWithWhereWithoutGame_record_roundsInput], {nullable:true})
    @Type(() => sg_gamesUpdateManyWithWhereWithoutGame_record_roundsInput)
    updateMany?: Array<sg_gamesUpdateManyWithWhereWithoutGame_record_roundsInput>;

    @Field(() => [sg_gamesScalarWhereInput], {nullable:true})
    @Type(() => sg_gamesScalarWhereInput)
    deleteMany?: Array<sg_gamesScalarWhereInput>;
}
