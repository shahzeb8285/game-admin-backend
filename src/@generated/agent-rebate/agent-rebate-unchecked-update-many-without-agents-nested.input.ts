import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentRebateCreateWithoutAgentsInput } from './agent-rebate-create-without-agents.input';
import { Type } from 'class-transformer';
import { AgentRebateCreateOrConnectWithoutAgentsInput } from './agent-rebate-create-or-connect-without-agents.input';
import { AgentRebateUpsertWithWhereUniqueWithoutAgentsInput } from './agent-rebate-upsert-with-where-unique-without-agents.input';
import { AgentRebateCreateManyAgentsInputEnvelope } from './agent-rebate-create-many-agents-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { AgentRebateUpdateWithWhereUniqueWithoutAgentsInput } from './agent-rebate-update-with-where-unique-without-agents.input';
import { AgentRebateUpdateManyWithWhereWithoutAgentsInput } from './agent-rebate-update-many-with-where-without-agents.input';
import { AgentRebateScalarWhereInput } from './agent-rebate-scalar-where.input';

@InputType()
export class AgentRebateUncheckedUpdateManyWithoutAgentsNestedInput {

    @Field(() => [AgentRebateCreateWithoutAgentsInput], {nullable:true})
    @Type(() => AgentRebateCreateWithoutAgentsInput)
    create?: Array<AgentRebateCreateWithoutAgentsInput>;

    @Field(() => [AgentRebateCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => AgentRebateCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<AgentRebateCreateOrConnectWithoutAgentsInput>;

    @Field(() => [AgentRebateUpsertWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => AgentRebateUpsertWithWhereUniqueWithoutAgentsInput)
    upsert?: Array<AgentRebateUpsertWithWhereUniqueWithoutAgentsInput>;

    @Field(() => AgentRebateCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => AgentRebateCreateManyAgentsInputEnvelope)
    createMany?: AgentRebateCreateManyAgentsInputEnvelope;

    @Field(() => [AgentRebateWhereUniqueInput], {nullable:true})
    @Type(() => AgentRebateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>>;

    @Field(() => [AgentRebateWhereUniqueInput], {nullable:true})
    @Type(() => AgentRebateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>>;

    @Field(() => [AgentRebateWhereUniqueInput], {nullable:true})
    @Type(() => AgentRebateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>>;

    @Field(() => [AgentRebateWhereUniqueInput], {nullable:true})
    @Type(() => AgentRebateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>>;

    @Field(() => [AgentRebateUpdateWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => AgentRebateUpdateWithWhereUniqueWithoutAgentsInput)
    update?: Array<AgentRebateUpdateWithWhereUniqueWithoutAgentsInput>;

    @Field(() => [AgentRebateUpdateManyWithWhereWithoutAgentsInput], {nullable:true})
    @Type(() => AgentRebateUpdateManyWithWhereWithoutAgentsInput)
    updateMany?: Array<AgentRebateUpdateManyWithWhereWithoutAgentsInput>;

    @Field(() => [AgentRebateScalarWhereInput], {nullable:true})
    @Type(() => AgentRebateScalarWhereInput)
    deleteMany?: Array<AgentRebateScalarWhereInput>;
}
