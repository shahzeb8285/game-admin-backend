import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayWhereUniqueInput } from '../agent-records-by-day/agent-records-by-day-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueagentRecordsByDayOrThrowArgs {

    @Field(() => agent_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    where!: agent_records_by_dayWhereUniqueInput;
}
