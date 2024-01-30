import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayWhereInput } from '../agent-records-by-day/agent-records-by-day-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyagentRecordsByDayArgs {

    @Field(() => agent_records_by_dayWhereInput, {nullable:true})
    @Type(() => agent_records_by_dayWhereInput)
    where?: agent_records_by_dayWhereInput;
}
