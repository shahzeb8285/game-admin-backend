import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesWhereUniqueInput } from '../agent-rebate-rates/agent-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesCreateInput } from '../agent-rebate-rates/agent-rebate-rates-create.input';
import { agent_rebate_ratesUpdateInput } from '../agent-rebate-rates/agent-rebate-rates-update.input';

@ArgsType()
export class UpsertOneagentRebateRatesArgs {

    @Field(() => agent_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebate_ratesWhereUniqueInput)
    where!: agent_rebate_ratesWhereUniqueInput;

    @Field(() => agent_rebate_ratesCreateInput, {nullable:false})
    @Type(() => agent_rebate_ratesCreateInput)
    create!: agent_rebate_ratesCreateInput;

    @Field(() => agent_rebate_ratesUpdateInput, {nullable:false})
    @Type(() => agent_rebate_ratesUpdateInput)
    update!: agent_rebate_ratesUpdateInput;
}
