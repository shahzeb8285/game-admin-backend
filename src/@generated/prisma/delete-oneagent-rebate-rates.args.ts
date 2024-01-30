import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesWhereUniqueInput } from '../agent-rebate-rates/agent-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneagentRebateRatesArgs {

    @Field(() => agent_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    where!: agent_rebate_ratesWhereUniqueInput;
}
