import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesUpdateManyMutationInput } from '../agent-rebate-rates/agent-rebate-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesWhereInput } from '../agent-rebate-rates/agent-rebate-rates-where.input';

@ArgsType()
export class UpdateManyagentRebateRatesArgs {

    @Field(() => agent_rebate_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => agent_rebate_ratesUpdateManyMutationInput)
    data!: agent_rebate_ratesUpdateManyMutationInput;

    @Field(() => agent_rebate_ratesWhereInput, {nullable:true})
    @Type(() => agent_rebate_ratesWhereInput)
    where?: agent_rebate_ratesWhereInput;
}
