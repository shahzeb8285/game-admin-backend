import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayWhereUniqueInput } from './agent-records-by-day-where-unique.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayUpdateWithoutPlayersInput } from './agent-records-by-day-update-without-players.input';

@InputType()
export class agent_records_by_dayUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => agent_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    where!: agent_records_by_dayWhereUniqueInput;

    @Field(() => agent_records_by_dayUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => agent_records_by_dayUpdateWithoutPlayersInput)
    data!: agent_records_by_dayUpdateWithoutPlayersInput;
}
