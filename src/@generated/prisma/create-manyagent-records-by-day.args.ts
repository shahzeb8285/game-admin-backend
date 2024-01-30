import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayCreateManyInput } from '../agent-records-by-day/agent-records-by-day-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyagentRecordsByDayArgs {

    @Field(() => [agent_records_by_dayCreateManyInput], {nullable:false})
    @Type(() => agent_records_by_dayCreateManyInput)
    data!: Array<agent_records_by_dayCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
