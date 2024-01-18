import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutAgentInput } from './players-create-without-agent.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutAgentInput } from './players-create-or-connect-without-agent.input';
import { playersCreateManyAgentInputEnvelope } from './players-create-many-agent-input-envelope.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedManyWithoutAgentInput {

    @Field(() => [playersCreateWithoutAgentInput], {nullable:true})
    @Type(() => playersCreateWithoutAgentInput)
    create?: Array<playersCreateWithoutAgentInput>;

    @Field(() => [playersCreateOrConnectWithoutAgentInput], {nullable:true})
    @Type(() => playersCreateOrConnectWithoutAgentInput)
    connectOrCreate?: Array<playersCreateOrConnectWithoutAgentInput>;

    @Field(() => playersCreateManyAgentInputEnvelope, {nullable:true})
    @Type(() => playersCreateManyAgentInputEnvelope)
    createMany?: playersCreateManyAgentInputEnvelope;

    @Field(() => [playersWhereUniqueInput], {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Array<playersWhereUniqueInput>;
}
