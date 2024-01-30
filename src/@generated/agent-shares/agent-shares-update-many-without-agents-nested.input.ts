import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_sharesCreateWithoutAgentsInput } from './agent-shares-create-without-agents.input';
import { Type } from 'class-transformer';
import { agent_sharesCreateOrConnectWithoutAgentsInput } from './agent-shares-create-or-connect-without-agents.input';
import { agent_sharesUpsertWithWhereUniqueWithoutAgentsInput } from './agent-shares-upsert-with-where-unique-without-agents.input';
import { agent_sharesCreateManyAgentsInputEnvelope } from './agent-shares-create-many-agents-input-envelope.input';
import { agent_sharesWhereUniqueInput } from './agent-shares-where-unique.input';
import { agent_sharesUpdateWithWhereUniqueWithoutAgentsInput } from './agent-shares-update-with-where-unique-without-agents.input';
import { agent_sharesUpdateManyWithWhereWithoutAgentsInput } from './agent-shares-update-many-with-where-without-agents.input';
import { agent_sharesScalarWhereInput } from './agent-shares-scalar-where.input';

@InputType()
export class agent_sharesUpdateManyWithoutAgentsNestedInput {

    @Field(() => [agent_sharesCreateWithoutAgentsInput], {nullable:true})
    @Type(() => agent_sharesCreateWithoutAgentsInput)
    create?: Array<agent_sharesCreateWithoutAgentsInput>;

    @Field(() => [agent_sharesCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => agent_sharesCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<agent_sharesCreateOrConnectWithoutAgentsInput>;

    @Field(() => [agent_sharesUpsertWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => agent_sharesUpsertWithWhereUniqueWithoutAgentsInput)
    upsert?: Array<agent_sharesUpsertWithWhereUniqueWithoutAgentsInput>;

    @Field(() => agent_sharesCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => agent_sharesCreateManyAgentsInputEnvelope)
    createMany?: agent_sharesCreateManyAgentsInputEnvelope;

    @Field(() => [agent_sharesWhereUniqueInput], {nullable:true})
    @Type(() => agent_sharesWhereUniqueInput)
    set?: Array<agent_sharesWhereUniqueInput>;

    @Field(() => [agent_sharesWhereUniqueInput], {nullable:true})
    @Type(() => agent_sharesWhereUniqueInput)
    disconnect?: Array<agent_sharesWhereUniqueInput>;

    @Field(() => [agent_sharesWhereUniqueInput], {nullable:true})
    @Type(() => agent_sharesWhereUniqueInput)
    delete?: Array<agent_sharesWhereUniqueInput>;

    @Field(() => [agent_sharesWhereUniqueInput], {nullable:true})
    @Type(() => agent_sharesWhereUniqueInput)
    connect?: Array<agent_sharesWhereUniqueInput>;

    @Field(() => [agent_sharesUpdateWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => agent_sharesUpdateWithWhereUniqueWithoutAgentsInput)
    update?: Array<agent_sharesUpdateWithWhereUniqueWithoutAgentsInput>;

    @Field(() => [agent_sharesUpdateManyWithWhereWithoutAgentsInput], {nullable:true})
    @Type(() => agent_sharesUpdateManyWithWhereWithoutAgentsInput)
    updateMany?: Array<agent_sharesUpdateManyWithWhereWithoutAgentsInput>;

    @Field(() => [agent_sharesScalarWhereInput], {nullable:true})
    @Type(() => agent_sharesScalarWhereInput)
    deleteMany?: Array<agent_sharesScalarWhereInput>;
}
