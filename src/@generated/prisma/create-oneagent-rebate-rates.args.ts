import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesCreateInput } from '../agent-rebate-rates/agent-rebate-rates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneagentRebateRatesArgs {

    @Field(() => agent_rebate_ratesCreateInput, {nullable:false})
    @Type(() => agent_rebate_ratesCreateInput)
    data!: agent_rebate_ratesCreateInput;
}
