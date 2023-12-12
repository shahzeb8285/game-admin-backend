import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutChildrenInput } from './agents-create-without-children.input';

@InputType()
export class agentsCreateOrConnectWithoutChildrenInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => agentsCreateWithoutChildrenInput, {nullable:false})
    @Type(() => agentsCreateWithoutChildrenInput)
    create!: agentsCreateWithoutChildrenInput;
}
