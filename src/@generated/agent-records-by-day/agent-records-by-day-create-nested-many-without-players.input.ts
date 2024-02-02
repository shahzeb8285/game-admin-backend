import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayCreateWithoutPlayersInput } from './agent-records-by-day-create-without-players.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayCreateOrConnectWithoutPlayersInput } from './agent-records-by-day-create-or-connect-without-players.input';
import { agent_records_by_dayCreateManyPlayersInputEnvelope } from './agent-records-by-day-create-many-players-input-envelope.input';
import { agent_records_by_dayWhereUniqueInput } from './agent-records-by-day-where-unique.input';

@InputType()
export class agent_records_by_dayCreateNestedManyWithoutPlayersInput {

    @Field(() => [agent_records_by_dayCreateWithoutPlayersInput], {nullable:true})
    @Type(() => agent_records_by_dayCreateWithoutPlayersInput)
    create?: Array<agent_records_by_dayCreateWithoutPlayersInput>;

    @Field(() => [agent_records_by_dayCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => agent_records_by_dayCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<agent_records_by_dayCreateOrConnectWithoutPlayersInput>;

    @Field(() => agent_records_by_dayCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => agent_records_by_dayCreateManyPlayersInputEnvelope)
    createMany?: agent_records_by_dayCreateManyPlayersInputEnvelope;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    connect?: Array<agent_records_by_dayWhereUniqueInput>;
}
