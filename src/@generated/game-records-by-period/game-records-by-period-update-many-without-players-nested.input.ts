import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_periodCreateWithoutPlayersInput } from './game-records-by-period-create-without-players.input';
import { Type } from 'class-transformer';
import { game_records_by_periodCreateOrConnectWithoutPlayersInput } from './game-records-by-period-create-or-connect-without-players.input';
import { game_records_by_periodUpsertWithWhereUniqueWithoutPlayersInput } from './game-records-by-period-upsert-with-where-unique-without-players.input';
import { game_records_by_periodCreateManyPlayersInputEnvelope } from './game-records-by-period-create-many-players-input-envelope.input';
import { game_records_by_periodWhereUniqueInput } from './game-records-by-period-where-unique.input';
import { game_records_by_periodUpdateWithWhereUniqueWithoutPlayersInput } from './game-records-by-period-update-with-where-unique-without-players.input';
import { game_records_by_periodUpdateManyWithWhereWithoutPlayersInput } from './game-records-by-period-update-many-with-where-without-players.input';
import { game_records_by_periodScalarWhereInput } from './game-records-by-period-scalar-where.input';

@InputType()
export class game_records_by_periodUpdateManyWithoutPlayersNestedInput {

    @Field(() => [game_records_by_periodCreateWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_periodCreateWithoutPlayersInput)
    create?: Array<game_records_by_periodCreateWithoutPlayersInput>;

    @Field(() => [game_records_by_periodCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_periodCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<game_records_by_periodCreateOrConnectWithoutPlayersInput>;

    @Field(() => [game_records_by_periodUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_periodUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<game_records_by_periodUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => game_records_by_periodCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => game_records_by_periodCreateManyPlayersInputEnvelope)
    createMany?: game_records_by_periodCreateManyPlayersInputEnvelope;

    @Field(() => [game_records_by_periodWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_periodWhereUniqueInput)
    set?: Array<game_records_by_periodWhereUniqueInput>;

    @Field(() => [game_records_by_periodWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_periodWhereUniqueInput)
    disconnect?: Array<game_records_by_periodWhereUniqueInput>;

    @Field(() => [game_records_by_periodWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_periodWhereUniqueInput)
    delete?: Array<game_records_by_periodWhereUniqueInput>;

    @Field(() => [game_records_by_periodWhereUniqueInput], {nullable:true})
    @Type(() => game_records_by_periodWhereUniqueInput)
    connect?: Array<game_records_by_periodWhereUniqueInput>;

    @Field(() => [game_records_by_periodUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_periodUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<game_records_by_periodUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [game_records_by_periodUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => game_records_by_periodUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<game_records_by_periodUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [game_records_by_periodScalarWhereInput], {nullable:true})
    @Type(() => game_records_by_periodScalarWhereInput)
    deleteMany?: Array<game_records_by_periodScalarWhereInput>;
}
