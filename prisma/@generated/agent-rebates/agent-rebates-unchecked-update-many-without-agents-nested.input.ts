import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebatesCreateWithoutAgentsInput } from './agent-rebates-create-without-agents.input';
import { Type } from 'class-transformer';
import { agent_rebatesCreateOrConnectWithoutAgentsInput } from './agent-rebates-create-or-connect-without-agents.input';
import { agent_rebatesUpsertWithWhereUniqueWithoutAgentsInput } from './agent-rebates-upsert-with-where-unique-without-agents.input';
import { agent_rebatesCreateManyAgentsInputEnvelope } from './agent-rebates-create-many-agents-input-envelope.input';
import { agent_rebatesWhereUniqueInput } from './agent-rebates-where-unique.input';
import { agent_rebatesUpdateWithWhereUniqueWithoutAgentsInput } from './agent-rebates-update-with-where-unique-without-agents.input';
import { agent_rebatesUpdateManyWithWhereWithoutAgentsInput } from './agent-rebates-update-many-with-where-without-agents.input';
import { agent_rebatesScalarWhereInput } from './agent-rebates-scalar-where.input';

@InputType()
export class agent_rebatesUncheckedUpdateManyWithoutAgentsNestedInput {

    @Field(() => [agent_rebatesCreateWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebatesCreateWithoutAgentsInput)
    create?: Array<agent_rebatesCreateWithoutAgentsInput>;

    @Field(() => [agent_rebatesCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebatesCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<agent_rebatesCreateOrConnectWithoutAgentsInput>;

    @Field(() => [agent_rebatesUpsertWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebatesUpsertWithWhereUniqueWithoutAgentsInput)
    upsert?: Array<agent_rebatesUpsertWithWhereUniqueWithoutAgentsInput>;

    @Field(() => agent_rebatesCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => agent_rebatesCreateManyAgentsInputEnvelope)
    createMany?: agent_rebatesCreateManyAgentsInputEnvelope;

    @Field(() => [agent_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebatesWhereUniqueInput)
    set?: Array<agent_rebatesWhereUniqueInput>;

    @Field(() => [agent_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebatesWhereUniqueInput)
    disconnect?: Array<agent_rebatesWhereUniqueInput>;

    @Field(() => [agent_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebatesWhereUniqueInput)
    delete?: Array<agent_rebatesWhereUniqueInput>;

    @Field(() => [agent_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebatesWhereUniqueInput)
    connect?: Array<agent_rebatesWhereUniqueInput>;

    @Field(() => [agent_rebatesUpdateWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebatesUpdateWithWhereUniqueWithoutAgentsInput)
    update?: Array<agent_rebatesUpdateWithWhereUniqueWithoutAgentsInput>;

    @Field(() => [agent_rebatesUpdateManyWithWhereWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebatesUpdateManyWithWhereWithoutAgentsInput)
    updateMany?: Array<agent_rebatesUpdateManyWithWhereWithoutAgentsInput>;

    @Field(() => [agent_rebatesScalarWhereInput], {nullable:true})
    @Type(() => agent_rebatesScalarWhereInput)
    deleteMany?: Array<agent_rebatesScalarWhereInput>;
}
