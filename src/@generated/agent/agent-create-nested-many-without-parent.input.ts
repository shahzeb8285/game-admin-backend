import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateWithoutParentInput } from './agent-create-without-parent.input';
import { Type } from 'class-transformer';
import { AgentCreateOrConnectWithoutParentInput } from './agent-create-or-connect-without-parent.input';
import { AgentCreateManyParentInputEnvelope } from './agent-create-many-parent-input-envelope.input';
import { AgentWhereUniqueInput } from './agent-where-unique.input';

@InputType()
export class AgentCreateNestedManyWithoutParentInput {

    @Field(() => [AgentCreateWithoutParentInput], {nullable:true})
    @Type(() => AgentCreateWithoutParentInput)
    create?: Array<AgentCreateWithoutParentInput>;

    @Field(() => [AgentCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => AgentCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<AgentCreateOrConnectWithoutParentInput>;

    @Field(() => AgentCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => AgentCreateManyParentInputEnvelope)
    createMany?: AgentCreateManyParentInputEnvelope;

    @Field(() => [AgentWhereUniqueInput], {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    connect?: Array<AgentWhereUniqueInput>;
}
