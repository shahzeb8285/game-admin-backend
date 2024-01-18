import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateWithoutParentInput } from './agent-create-without-parent.input';
import { Type } from 'class-transformer';
import { AgentCreateOrConnectWithoutParentInput } from './agent-create-or-connect-without-parent.input';
import { AgentUpsertWithWhereUniqueWithoutParentInput } from './agent-upsert-with-where-unique-without-parent.input';
import { AgentCreateManyParentInputEnvelope } from './agent-create-many-parent-input-envelope.input';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { AgentUpdateWithWhereUniqueWithoutParentInput } from './agent-update-with-where-unique-without-parent.input';
import { AgentUpdateManyWithWhereWithoutParentInput } from './agent-update-many-with-where-without-parent.input';
import { AgentScalarWhereInput } from './agent-scalar-where.input';

@InputType()
export class AgentUncheckedUpdateManyWithoutParentNestedInput {

    @Field(() => [AgentCreateWithoutParentInput], {nullable:true})
    @Type(() => AgentCreateWithoutParentInput)
    create?: Array<AgentCreateWithoutParentInput>;

    @Field(() => [AgentCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => AgentCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<AgentCreateOrConnectWithoutParentInput>;

    @Field(() => [AgentUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => AgentUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<AgentUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => AgentCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => AgentCreateManyParentInputEnvelope)
    createMany?: AgentCreateManyParentInputEnvelope;

    @Field(() => [AgentWhereUniqueInput], {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    set?: Array<AgentWhereUniqueInput>;

    @Field(() => [AgentWhereUniqueInput], {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    disconnect?: Array<AgentWhereUniqueInput>;

    @Field(() => [AgentWhereUniqueInput], {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    delete?: Array<AgentWhereUniqueInput>;

    @Field(() => [AgentWhereUniqueInput], {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    connect?: Array<AgentWhereUniqueInput>;

    @Field(() => [AgentUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => AgentUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<AgentUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [AgentUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => AgentUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<AgentUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [AgentScalarWhereInput], {nullable:true})
    @Type(() => AgentScalarWhereInput)
    deleteMany?: Array<AgentScalarWhereInput>;
}
