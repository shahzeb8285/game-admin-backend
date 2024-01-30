import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_sharesCreateWithoutAgentsInput } from './agent-shares-create-without-agents.input';
import { Type } from 'class-transformer';
import { agent_sharesCreateOrConnectWithoutAgentsInput } from './agent-shares-create-or-connect-without-agents.input';
import { agent_sharesCreateManyAgentsInputEnvelope } from './agent-shares-create-many-agents-input-envelope.input';
import { agent_sharesWhereUniqueInput } from './agent-shares-where-unique.input';

@InputType()
export class agent_sharesCreateNestedManyWithoutAgentsInput {

    @Field(() => [agent_sharesCreateWithoutAgentsInput], {nullable:true})
    @Type(() => agent_sharesCreateWithoutAgentsInput)
    create?: Array<agent_sharesCreateWithoutAgentsInput>;

    @Field(() => [agent_sharesCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => agent_sharesCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<agent_sharesCreateOrConnectWithoutAgentsInput>;

    @Field(() => agent_sharesCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => agent_sharesCreateManyAgentsInputEnvelope)
    createMany?: agent_sharesCreateManyAgentsInputEnvelope;

    @Field(() => [agent_sharesWhereUniqueInput], {nullable:true})
    @Type(() => agent_sharesWhereUniqueInput)
    connect?: Array<agent_sharesWhereUniqueInput>;
}
