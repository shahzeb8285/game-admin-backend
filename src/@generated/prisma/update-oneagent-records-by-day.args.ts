import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayUpdateInput } from '../agent-records-by-day/agent-records-by-day-update.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayWhereUniqueInput } from '../agent-records-by-day/agent-records-by-day-where-unique.input';

@ArgsType()
export class UpdateOneagentRecordsByDayArgs {

    @Field(() => agent_records_by_dayUpdateInput, {nullable:false})
    @Type(() => agent_records_by_dayUpdateInput)
    data!: agent_records_by_dayUpdateInput;

    @Field(() => agent_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    where!: agent_records_by_dayWhereUniqueInput;
}
