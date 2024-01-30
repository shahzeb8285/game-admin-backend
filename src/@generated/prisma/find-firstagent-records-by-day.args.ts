import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayWhereInput } from '../agent-records-by-day/agent-records-by-day-where.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayOrderByWithRelationInput } from '../agent-records-by-day/agent-records-by-day-order-by-with-relation.input';
import { agent_records_by_dayWhereUniqueInput } from '../agent-records-by-day/agent-records-by-day-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Agent_records_by_dayScalarFieldEnum } from './agent-records-by-day-scalar-field.enum';

@ArgsType()
export class FindFirstagentRecordsByDayArgs {

    @Field(() => agent_records_by_dayWhereInput, {nullable:true})
    @Type(() => agent_records_by_dayWhereInput)
    where?: agent_records_by_dayWhereInput;

    @Field(() => [agent_records_by_dayOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<agent_records_by_dayOrderByWithRelationInput>;

    @Field(() => agent_records_by_dayWhereUniqueInput, {nullable:true})
    cursor?: agent_records_by_dayWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Agent_records_by_dayScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Agent_records_by_dayScalarFieldEnum>;
}
