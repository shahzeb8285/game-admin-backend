import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesUpdateInput } from '../agent-rebate-rates/agent-rebate-rates-update.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesWhereUniqueInput } from '../agent-rebate-rates/agent-rebate-rates-where-unique.input';

@ArgsType()
export class UpdateOneagentRebateRatesArgs {

    @Field(() => agent_rebate_ratesUpdateInput, {nullable:false})
    @Type(() => agent_rebate_ratesUpdateInput)
    data!: agent_rebate_ratesUpdateInput;

    @Field(() => agent_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    where!: agent_rebate_ratesWhereUniqueInput;
}
