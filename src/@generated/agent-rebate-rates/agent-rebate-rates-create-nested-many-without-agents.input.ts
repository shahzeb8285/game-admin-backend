import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebate_ratesCreateWithoutAgentsInput } from './agent-rebate-rates-create-without-agents.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesCreateOrConnectWithoutAgentsInput } from './agent-rebate-rates-create-or-connect-without-agents.input';
import { agent_rebate_ratesCreateManyAgentsInputEnvelope } from './agent-rebate-rates-create-many-agents-input-envelope.input';
import { agent_rebate_ratesWhereUniqueInput } from './agent-rebate-rates-where-unique.input';

@InputType()
export class agent_rebate_ratesCreateNestedManyWithoutAgentsInput {

    @Field(() => [agent_rebate_ratesCreateWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebate_ratesCreateWithoutAgentsInput)
    create?: Array<agent_rebate_ratesCreateWithoutAgentsInput>;

    @Field(() => [agent_rebate_ratesCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => agent_rebate_ratesCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<agent_rebate_ratesCreateOrConnectWithoutAgentsInput>;

    @Field(() => agent_rebate_ratesCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => agent_rebate_ratesCreateManyAgentsInputEnvelope)
    createMany?: agent_rebate_ratesCreateManyAgentsInputEnvelope;

    @Field(() => [agent_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    connect?: Array<agent_rebate_ratesWhereUniqueInput>;
}
