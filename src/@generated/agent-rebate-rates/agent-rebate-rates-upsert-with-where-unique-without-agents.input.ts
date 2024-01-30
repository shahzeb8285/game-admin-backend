import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebate_ratesWhereUniqueInput } from './agent-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesUpdateWithoutAgentsInput } from './agent-rebate-rates-update-without-agents.input';
import { agent_rebate_ratesCreateWithoutAgentsInput } from './agent-rebate-rates-create-without-agents.input';

@InputType()
export class agent_rebate_ratesUpsertWithWhereUniqueWithoutAgentsInput {

    @Field(() => agent_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    where!: agent_rebate_ratesWhereUniqueInput;

    @Field(() => agent_rebate_ratesUpdateWithoutAgentsInput, {nullable:false})
    @Type(() => agent_rebate_ratesUpdateWithoutAgentsInput)
    update!: agent_rebate_ratesUpdateWithoutAgentsInput;

    @Field(() => agent_rebate_ratesCreateWithoutAgentsInput, {nullable:false})
    @Type(() => agent_rebate_ratesCreateWithoutAgentsInput)
    create!: agent_rebate_ratesCreateWithoutAgentsInput;
}
