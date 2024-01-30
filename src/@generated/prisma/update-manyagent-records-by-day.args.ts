import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayUpdateManyMutationInput } from '../agent-records-by-day/agent-records-by-day-update-many-mutation.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayWhereInput } from '../agent-records-by-day/agent-records-by-day-where.input';

@ArgsType()
export class UpdateManyagentRecordsByDayArgs {

    @Field(() => agent_records_by_dayUpdateManyMutationInput, {nullable:false})
    @Type(() => agent_records_by_dayUpdateManyMutationInput)
    data!: agent_records_by_dayUpdateManyMutationInput;

    @Field(() => agent_records_by_dayWhereInput, {nullable:true})
    @Type(() => agent_records_by_dayWhereInput)
    where?: agent_records_by_dayWhereInput;
}
