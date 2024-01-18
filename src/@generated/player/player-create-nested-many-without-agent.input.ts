import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutAgentInput } from './player-create-without-agent.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutAgentInput } from './player-create-or-connect-without-agent.input';
import { PlayerCreateManyAgentInputEnvelope } from './player-create-many-agent-input-envelope.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedManyWithoutAgentInput {

    @Field(() => [PlayerCreateWithoutAgentInput], {nullable:true})
    @Type(() => PlayerCreateWithoutAgentInput)
    create?: Array<PlayerCreateWithoutAgentInput>;

    @Field(() => [PlayerCreateOrConnectWithoutAgentInput], {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutAgentInput)
    connectOrCreate?: Array<PlayerCreateOrConnectWithoutAgentInput>;

    @Field(() => PlayerCreateManyAgentInputEnvelope, {nullable:true})
    @Type(() => PlayerCreateManyAgentInputEnvelope)
    createMany?: PlayerCreateManyAgentInputEnvelope;

    @Field(() => [PlayerWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Array<PlayerWhereUniqueInput>;
}
