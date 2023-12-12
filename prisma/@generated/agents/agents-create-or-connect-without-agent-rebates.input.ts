import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutAgent_rebatesInput } from './agents-create-without-agent-rebates.input';

@InputType()
export class agentsCreateOrConnectWithoutAgent_rebatesInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => agentsCreateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => agentsCreateWithoutAgent_rebatesInput)
    create!: agentsCreateWithoutAgent_rebatesInput;
}
