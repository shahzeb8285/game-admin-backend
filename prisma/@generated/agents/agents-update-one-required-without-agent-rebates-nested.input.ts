import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutAgent_rebatesInput } from './agents-create-without-agent-rebates.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutAgent_rebatesInput } from './agents-create-or-connect-without-agent-rebates.input';
import { agentsUpsertWithoutAgent_rebatesInput } from './agents-upsert-without-agent-rebates.input';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { agentsUpdateToOneWithWhereWithoutAgent_rebatesInput } from './agents-update-to-one-with-where-without-agent-rebates.input';

@InputType()
export class agentsUpdateOneRequiredWithoutAgent_rebatesNestedInput {

    @Field(() => agentsCreateWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => agentsCreateWithoutAgent_rebatesInput)
    create?: agentsCreateWithoutAgent_rebatesInput;

    @Field(() => agentsCreateOrConnectWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutAgent_rebatesInput)
    connectOrCreate?: agentsCreateOrConnectWithoutAgent_rebatesInput;

    @Field(() => agentsUpsertWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => agentsUpsertWithoutAgent_rebatesInput)
    upsert?: agentsUpsertWithoutAgent_rebatesInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => agentsUpdateToOneWithWhereWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => agentsUpdateToOneWithWhereWithoutAgent_rebatesInput)
    update?: agentsUpdateToOneWithWhereWithoutAgent_rebatesInput;
}
