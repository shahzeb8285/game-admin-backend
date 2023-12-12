import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutParentInput } from './agents-create-without-parent.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutParentInput } from './agents-create-or-connect-without-parent.input';
import { agentsCreateManyParentInputEnvelope } from './agents-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';

@InputType()
export class agentsUncheckedCreateNestedManyWithoutParentInput {

    @Field(() => [agentsCreateWithoutParentInput], {nullable:true})
    @Type(() => agentsCreateWithoutParentInput)
    create?: Array<agentsCreateWithoutParentInput>;

    @Field(() => [agentsCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<agentsCreateOrConnectWithoutParentInput>;

    @Field(() => agentsCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => agentsCreateManyParentInputEnvelope)
    createMany?: agentsCreateManyParentInputEnvelope;

    @Field(() => [agentsWhereUniqueInput], {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>>;
}
