import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesCreateManyInput } from '../agent-rebate-rates/agent-rebate-rates-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyagentRebateRatesArgs {

    @Field(() => [agent_rebate_ratesCreateManyInput], {nullable:false})
    @Type(() => agent_rebate_ratesCreateManyInput)
    data!: Array<agent_rebate_ratesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
