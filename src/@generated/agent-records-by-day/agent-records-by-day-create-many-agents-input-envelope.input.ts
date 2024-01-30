import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayCreateManyAgentsInput } from './agent-records-by-day-create-many-agents.input';
import { Type } from 'class-transformer';

@InputType()
export class agent_records_by_dayCreateManyAgentsInputEnvelope {

    @Field(() => [agent_records_by_dayCreateManyAgentsInput], {nullable:false})
    @Type(() => agent_records_by_dayCreateManyAgentsInput)
    data!: Array<agent_records_by_dayCreateManyAgentsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
