import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayWhereInput } from '../agent-records-by-day/agent-records-by-day-where.input';

@InputType()
export class Agent_records_by_dayListRelationFilter {

    @Field(() => agent_records_by_dayWhereInput, {nullable:true})
    every?: agent_records_by_dayWhereInput;

    @Field(() => agent_records_by_dayWhereInput, {nullable:true})
    some?: agent_records_by_dayWhereInput;

    @Field(() => agent_records_by_dayWhereInput, {nullable:true})
    none?: agent_records_by_dayWhereInput;
}
