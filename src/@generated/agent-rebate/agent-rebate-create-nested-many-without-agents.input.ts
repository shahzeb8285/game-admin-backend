import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentRebateCreateWithoutAgentsInput } from './agent-rebate-create-without-agents.input';
import { Type } from 'class-transformer';
import { AgentRebateCreateOrConnectWithoutAgentsInput } from './agent-rebate-create-or-connect-without-agents.input';
import { AgentRebateCreateManyAgentsInputEnvelope } from './agent-rebate-create-many-agents-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';

@InputType()
export class AgentRebateCreateNestedManyWithoutAgentsInput {

    @Field(() => [AgentRebateCreateWithoutAgentsInput], {nullable:true})
    @Type(() => AgentRebateCreateWithoutAgentsInput)
    create?: Array<AgentRebateCreateWithoutAgentsInput>;

    @Field(() => [AgentRebateCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => AgentRebateCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<AgentRebateCreateOrConnectWithoutAgentsInput>;

    @Field(() => AgentRebateCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => AgentRebateCreateManyAgentsInputEnvelope)
    createMany?: AgentRebateCreateManyAgentsInputEnvelope;

    @Field(() => [AgentRebateWhereUniqueInput], {nullable:true})
    @Type(() => AgentRebateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>>;
}
