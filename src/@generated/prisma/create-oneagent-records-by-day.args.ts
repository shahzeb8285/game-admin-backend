import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayCreateInput } from '../agent-records-by-day/agent-records-by-day-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneagentRecordsByDayArgs {

    @Field(() => agent_records_by_dayCreateInput, {nullable:false})
    @Type(() => agent_records_by_dayCreateInput)
    data!: agent_records_by_dayCreateInput;
}
