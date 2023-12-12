import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutParentInput } from './agents-create-without-parent.input';

@InputType()
export class agentsCreateOrConnectWithoutParentInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => agentsCreateWithoutParentInput, {nullable:false})
    @Type(() => agentsCreateWithoutParentInput)
    create!: agentsCreateWithoutParentInput;
}
