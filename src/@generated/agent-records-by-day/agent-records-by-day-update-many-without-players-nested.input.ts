import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayCreateWithoutPlayersInput } from './agent-records-by-day-create-without-players.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayCreateOrConnectWithoutPlayersInput } from './agent-records-by-day-create-or-connect-without-players.input';
import { agent_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput } from './agent-records-by-day-upsert-with-where-unique-without-players.input';
import { agent_records_by_dayCreateManyPlayersInputEnvelope } from './agent-records-by-day-create-many-players-input-envelope.input';
import { agent_records_by_dayWhereUniqueInput } from './agent-records-by-day-where-unique.input';
import { agent_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput } from './agent-records-by-day-update-with-where-unique-without-players.input';
import { agent_records_by_dayUpdateManyWithWhereWithoutPlayersInput } from './agent-records-by-day-update-many-with-where-without-players.input';
import { agent_records_by_dayScalarWhereInput } from './agent-records-by-day-scalar-where.input';

@InputType()
export class agent_records_by_dayUpdateManyWithoutPlayersNestedInput {

    @Field(() => [agent_records_by_dayCreateWithoutPlayersInput], {nullable:true})
    @Type(() => agent_records_by_dayCreateWithoutPlayersInput)
    create?: Array<agent_records_by_dayCreateWithoutPlayersInput>;

    @Field(() => [agent_records_by_dayCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => agent_records_by_dayCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<agent_records_by_dayCreateOrConnectWithoutPlayersInput>;

    @Field(() => [agent_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => agent_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<agent_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => agent_records_by_dayCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => agent_records_by_dayCreateManyPlayersInputEnvelope)
    createMany?: agent_records_by_dayCreateManyPlayersInputEnvelope;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    set?: Array<agent_records_by_dayWhereUniqueInput>;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    disconnect?: Array<agent_records_by_dayWhereUniqueInput>;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    delete?: Array<agent_records_by_dayWhereUniqueInput>;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    connect?: Array<agent_records_by_dayWhereUniqueInput>;

    @Field(() => [agent_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => agent_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<agent_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [agent_records_by_dayUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => agent_records_by_dayUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<agent_records_by_dayUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [agent_records_by_dayScalarWhereInput], {nullable:true})
    @Type(() => agent_records_by_dayScalarWhereInput)
    deleteMany?: Array<agent_records_by_dayScalarWhereInput>;
}
