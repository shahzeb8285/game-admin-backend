import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebatesCreateWithoutAgentsInput } from './agent-rebates-create-without-agents.input';
import { Type } from 'class-transformer';
import { agent_rebatesCreateOrConnectWithoutAgentsInput } from './agent-rebates-create-or-connect-without-agents.input';
import { agent_rebatesCreateManyAgentsInputEnvelope } from './agent-rebates-create-many-agents-input-envelope.input';
import { Prisma } from '@prisma/client';
import { agent_rebatesWhereUniqueInput } from './agent-rebates-where-unique.input';

@InputType()
export class agent_rebatesUncheckedCreateNestedManyWithoutAgentsInput {

    @Field(() => [agent_rebatesCreateWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebatesCreateWithoutAgentsInput)
    create?: Array<agent_rebatesCreateWithoutAgentsInput>;

    @Field(() => [agent_rebatesCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebatesCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<agent_rebatesCreateOrConnectWithoutAgentsInput>;

    @Field(() => agent_rebatesCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => agent_rebatesCreateManyAgentsInputEnvelope)
    createMany?: agent_rebatesCreateManyAgentsInputEnvelope;

    @Field(() => [agent_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebatesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<agent_rebatesWhereUniqueInput, 'agent_rebate_id'>>;
}
