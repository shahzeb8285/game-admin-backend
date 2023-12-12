import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutChildrenInput } from './agents-create-without-children.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutChildrenInput } from './agents-create-or-connect-without-children.input';
import { agentsUpsertWithoutChildrenInput } from './agents-upsert-without-children.input';
import { agentsWhereInput } from './agents-where.input';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { agentsUpdateToOneWithWhereWithoutChildrenInput } from './agents-update-to-one-with-where-without-children.input';

@InputType()
export class agentsUpdateOneWithoutChildrenNestedInput {

    @Field(() => agentsCreateWithoutChildrenInput, {nullable:true})
    @Type(() => agentsCreateWithoutChildrenInput)
    create?: agentsCreateWithoutChildrenInput;

    @Field(() => agentsCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: agentsCreateOrConnectWithoutChildrenInput;

    @Field(() => agentsUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => agentsUpsertWithoutChildrenInput)
    upsert?: agentsUpsertWithoutChildrenInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    disconnect?: agentsWhereInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    delete?: agentsWhereInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => agentsUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => agentsUpdateToOneWithWhereWithoutChildrenInput)
    update?: agentsUpdateToOneWithWhereWithoutChildrenInput;
}
