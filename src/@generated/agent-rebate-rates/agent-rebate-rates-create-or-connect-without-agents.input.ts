import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebate_ratesWhereUniqueInput } from './agent-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesCreateWithoutAgentsInput } from './agent-rebate-rates-create-without-agents.input';

@InputType()
export class agent_rebate_ratesCreateOrConnectWithoutAgentsInput {

    @Field(() => agent_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    where!: agent_rebate_ratesWhereUniqueInput;

    @Field(() => agent_rebate_ratesCreateWithoutAgentsInput, {nullable:false})
    @Type(() => agent_rebate_ratesCreateWithoutAgentsInput)
    create!: agent_rebate_ratesCreateWithoutAgentsInput;
}
