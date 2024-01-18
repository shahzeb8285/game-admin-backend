import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentRebateCreateManyAgentsInput } from './agent-rebate-create-many-agents.input';
import { Type } from 'class-transformer';

@InputType()
export class AgentRebateCreateManyAgentsInputEnvelope {

    @Field(() => [AgentRebateCreateManyAgentsInput], {nullable:false})
    @Type(() => AgentRebateCreateManyAgentsInput)
    data!: Array<AgentRebateCreateManyAgentsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
