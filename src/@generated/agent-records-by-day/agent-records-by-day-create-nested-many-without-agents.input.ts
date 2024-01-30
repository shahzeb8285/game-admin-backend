import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayCreateWithoutAgentsInput } from './agent-records-by-day-create-without-agents.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayCreateOrConnectWithoutAgentsInput } from './agent-records-by-day-create-or-connect-without-agents.input';
import { agent_records_by_dayCreateManyAgentsInputEnvelope } from './agent-records-by-day-create-many-agents-input-envelope.input';
import { agent_records_by_dayWhereUniqueInput } from './agent-records-by-day-where-unique.input';

@InputType()
export class agent_records_by_dayCreateNestedManyWithoutAgentsInput {

    @Field(() => [agent_records_by_dayCreateWithoutAgentsInput], {nullable:true})
    @Type(() => agent_records_by_dayCreateWithoutAgentsInput)
    create?: Array<agent_records_by_dayCreateWithoutAgentsInput>;

    @Field(() => [agent_records_by_dayCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => agent_records_by_dayCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<agent_records_by_dayCreateOrConnectWithoutAgentsInput>;

    @Field(() => agent_records_by_dayCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => agent_records_by_dayCreateManyAgentsInputEnvelope)
    createMany?: agent_records_by_dayCreateManyAgentsInputEnvelope;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    connect?: Array<agent_records_by_dayWhereUniqueInput>;
}
