import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutAgent_rebatesInput } from './agents-create-without-agent-rebates.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutAgent_rebatesInput } from './agents-create-or-connect-without-agent-rebates.input';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';

@InputType()
export class agentsCreateNestedOneWithoutAgent_rebatesInput {

    @Field(() => agentsCreateWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => agentsCreateWithoutAgent_rebatesInput)
    create?: agentsCreateWithoutAgent_rebatesInput;

    @Field(() => agentsCreateOrConnectWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutAgent_rebatesInput)
    connectOrCreate?: agentsCreateOrConnectWithoutAgent_rebatesInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;
}
