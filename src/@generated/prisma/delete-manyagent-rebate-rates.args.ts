import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesWhereInput } from '../agent-rebate-rates/agent-rebate-rates-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyagentRebateRatesArgs {

    @Field(() => agent_rebate_ratesWhereInput, {nullable:true})
    @Type(() => agent_rebate_ratesWhereInput)
    where?: agent_rebate_ratesWhereInput;
}
