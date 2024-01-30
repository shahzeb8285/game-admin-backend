import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayWhereUniqueInput } from '../agent-records-by-day/agent-records-by-day-where-unique.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayCreateInput } from '../agent-records-by-day/agent-records-by-day-create.input';
import { agent_records_by_dayUpdateInput } from '../agent-records-by-day/agent-records-by-day-update.input';

@ArgsType()
export class UpsertOneagentRecordsByDayArgs {

    @Field(() => agent_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    where!: agent_records_by_dayWhereUniqueInput;

    @Field(() => agent_records_by_dayCreateInput, {nullable:false})
    @Type(() => agent_records_by_dayCreateInput)
    create!: agent_records_by_dayCreateInput;

    @Field(() => agent_records_by_dayUpdateInput, {nullable:false})
    @Type(() => agent_records_by_dayUpdateInput)
    update!: agent_records_by_dayUpdateInput;
}
