import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_dayCreateWithoutPlayersInput } from './game-records-by-day-create-without-players.input';
import { Type } from 'class-transformer';
import { game_records_by_dayCreateOrConnectWithoutPlayersInput } from './game-records-by-day-create-or-connect-without-players.input';
import { game_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput } from './game-records-by-day-upsert-with-where-unique-without-players.input';
import { game_records_by_dayCreateManyPlayersInputEnvelope } from './game-records-by-day-create-many-players-input-envelope.input';
import { game_records_by_dayWhereUniqueInput } from './game-records-by-day-where-unique.input';
import { game_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput } from './game-records-by-day-update-with-where-unique-without-players.input';
import { game_records_by_dayUpdateManyWithWhereWithoutPlayersInput } from './game-records-by-day-update-many-with-where-without-players.input';
import { game_records_by_dayScalarWhereInput } from './game-records-by-day-scalar-where.input';

@InputType()
export class game_records_by_dayUpdateManyWithoutPlayersNestedInput {

    @Field(() => [game_records_by_dayCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_dayCreateWithoutPlayersInput)
    create?: Array<game_records_by_dayCreateWithoutPlayersInput>;

    @Field(() => [game_records_by_dayCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_dayCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_records_by_dayCreateOrConnectWithoutPlayersInput>;

    @Field(() => [game_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<game_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => game_records_by_dayCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_records_by_dayCreateManyPlayersInputEnvelope)
    createMany?: game_records_by_dayCreateManyPlayersInputEnvelope;

    @Field(() => [game_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_dayWhereUniqueInput)
    set?: Array<game_records_by_dayWhereUniqueInput>;

    @Field(() => [game_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_dayWhereUniqueInput)
    disconnect?: Array<game_records_by_dayWhereUniqueInput>;

    @Field(() => [game_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_dayWhereUniqueInput)
    delete?: Array<game_records_by_dayWhereUniqueInput>;

    @Field(() => [game_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_dayWhereUniqueInput)
    connect?: Array<game_records_by_dayWhereUniqueInput>;

    @Field(() => [game_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<game_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [game_records_by_dayUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_dayUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<game_records_by_dayUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [game_records_by_dayScalarWhereInput], {nullable:true})
    @Type(() => game_records_by_dayScalarWhereInput)
    deleteMany?: Array<game_records_by_dayScalarWhereInput>;
}
