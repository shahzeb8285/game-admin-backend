import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_records_by_dayWhereInput } from '../agent-records-by-day/agent-records-by-day-where.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayOrderByWithAggregationInput } from '../agent-records-by-day/agent-records-by-day-order-by-with-aggregation.input';
import { Agent_records_by_dayScalarFieldEnum } from './agent-records-by-day-scalar-field.enum';
import { agent_records_by_dayScalarWhereWithAggregatesInput } from '../agent-records-by-day/agent-records-by-day-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByagentRecordsByDayArgs {

    @Field(() => agent_records_by_dayWhereInput, {nullable:true})
    @Type(() => agent_records_by_dayWhereInput)
    where?: agent_records_by_dayWhereInput;

    @Field(() => [agent_records_by_dayOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<agent_records_by_dayOrderByWithAggregationInput>;

    @Field(() => [Agent_records_by_dayScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Agent_records_by_dayScalarFieldEnum>;

    @Field(() => agent_records_by_dayScalarWhereWithAggregatesInput, {nullable:true})
    having?: agent_records_by_dayScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
