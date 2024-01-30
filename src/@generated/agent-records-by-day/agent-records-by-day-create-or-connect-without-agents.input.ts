import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayWhereUniqueInput } from './agent-records-by-day-where-unique.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayCreateWithoutAgentsInput } from './agent-records-by-day-create-without-agents.input';

@InputType()
export class agent_records_by_dayCreateOrConnectWithoutAgentsInput {

    @Field(() => agent_records_by_dayWhereUniqueInput, {nullable:false})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    where!: agent_records_by_dayWhereUniqueInput;

    @Field(() => agent_records_by_dayCreateWithoutAgentsInput, {nullable:false})
    @Type(() => agent_records_by_dayCreateWithoutAgentsInput)
    create!: agent_records_by_dayCreateWithoutAgentsInput;
}
