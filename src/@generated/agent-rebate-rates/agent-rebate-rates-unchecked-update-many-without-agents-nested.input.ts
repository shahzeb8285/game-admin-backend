import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebate_ratesCreateWithoutAgentsInput } from './agent-rebate-rates-create-without-agents.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesCreateOrConnectWithoutAgentsInput } from './agent-rebate-rates-create-or-connect-without-agents.input';
import { agent_rebate_ratesUpsertWithWhereUniqueWithoutAgentsInput } from './agent-rebate-rates-upsert-with-where-unique-without-agents.input';
import { agent_rebate_ratesCreateManyAgentsInputEnvelope } from './agent-rebate-rates-create-many-agents-input-envelope.input';
import { agent_rebate_ratesWhereUniqueInput } from './agent-rebate-rates-where-unique.input';
import { agent_rebate_ratesUpdateWithWhereUniqueWithoutAgentsInput } from './agent-rebate-rates-update-with-where-unique-without-agents.input';
import { agent_rebate_ratesUpdateManyWithWhereWithoutAgentsInput } from './agent-rebate-rates-update-many-with-where-without-agents.input';
import { agent_rebate_ratesScalarWhereInput } from './agent-rebate-rates-scalar-where.input';

@InputType()
export class agent_rebate_ratesUncheckedUpdateManyWithoutAgentsNestedInput {

    @Field(() => [agent_rebate_ratesCreateWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebate_ratesCreateWithoutAgentsInput)
    create?: Array<agent_rebate_ratesCreateWithoutAgentsInput>;

    @Field(() => [agent_rebate_ratesCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebate_ratesCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<agent_rebate_ratesCreateOrConnectWithoutAgentsInput>;

    @Field(() => [agent_rebate_ratesUpsertWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebate_ratesUpsertWithWhereUniqueWithoutAgentsInput)
    upsert?: Array<agent_rebate_ratesUpsertWithWhereUniqueWithoutAgentsInput>;

    @Field(() => agent_rebate_ratesCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => agent_rebate_ratesCreateManyAgentsInputEnvelope)
    createMany?: agent_rebate_ratesCreateManyAgentsInputEnvelope;

    @Field(() => [agent_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    set?: Array<agent_rebate_ratesWhereUniqueInput>;

    @Field(() => [agent_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    disconnect?: Array<agent_rebate_ratesWhereUniqueInput>;

    @Field(() => [agent_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    delete?: Array<agent_rebate_ratesWhereUniqueInput>;

    @Field(() => [agent_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    connect?: Array<agent_rebate_ratesWhereUniqueInput>;

    @Field(() => [agent_rebate_ratesUpdateWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebate_ratesUpdateWithWhereUniqueWithoutAgentsInput)
    update?: Array<agent_rebate_ratesUpdateWithWhereUniqueWithoutAgentsInput>;

    @Field(() => [agent_rebate_ratesUpdateManyWithWhereWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebate_ratesUpdateManyWithWhereWithoutAgentsInput)
    updateMany?: Array<agent_rebate_ratesUpdateManyWithWhereWithoutAgentsInput>;

    @Field(() => [agent_rebate_ratesScalarWhereInput], {nullable:true})
    @Type(() => agent_rebate_ratesScalarWhereInput)
    deleteMany?: Array<agent_rebate_ratesScalarWhereInput>;
}
