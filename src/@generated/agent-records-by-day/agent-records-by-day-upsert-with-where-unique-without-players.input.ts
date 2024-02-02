import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayWhereUniqueInput } from './agent-records-by-day-where-unique.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayUpdateWithoutPlayersInput } from './agent-records-by-day-update-without-players.input';
import { agent_records_by_dayCreateWithoutPlayersInput } from './agent-records-by-day-create-without-players.input';

@InputType()
export class agent_records_by_dayUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => agent_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    where!: agent_records_by_dayWhereUniqueInput;

    @Field(() => agent_records_by_dayUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => agent_records_by_dayUpdateWithoutPlayersInput)
    update!: agent_records_by_dayUpdateWithoutPlayersInput;

    @Field(() => agent_records_by_dayCreateWithoutPlayersInput, {nullable:false})
    @Type(() => agent_records_by_dayCreateWithoutPlayersInput)
    create!: agent_records_by_dayCreateWithoutPlayersInput;
}
